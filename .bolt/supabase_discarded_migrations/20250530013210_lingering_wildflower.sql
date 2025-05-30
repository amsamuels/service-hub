-- Create profiles table that extends the auth.users table
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text unique not null,
  full_name text,
  avatar_url text,
  user_type text check (user_type in ('provider', 'customer')) not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- Create a trigger to automatically update updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger profiles_updated_at
  before update on public.profiles
  for each row
  execute function public.handle_updated_at();

-- Create a function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, user_type)
  values (new.id, new.email, 'customer');
  return new;
end;
$$ language plpgsql;

-- Trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Set up Row Level Security (RLS)
alter table public.profiles enable row level security;

-- Create policies
create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Create types table for user roles
create type user_role as enum ('admin', 'provider', 'customer');

-- Create user_roles table
create table public.user_roles (
  user_id uuid references auth.users on delete cascade not null primary key,
  role user_role not null default 'customer',
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- Set up RLS for user_roles
alter table public.user_roles enable row level security;

-- Create policies for user_roles
create policy "Users can view their own role"
  on public.user_roles for select
  using (auth.uid() = user_id);

-- Create a function to handle user role assignment
create or replace function public.handle_new_user_role()
returns trigger as $$
begin
  insert into public.user_roles (user_id, role)
  values (new.id, 'customer');
  return new;
end;
$$ language plpgsql;

-- Trigger the function every time a user is created
create trigger on_auth_user_role_created
  after insert on auth.users
  for each row execute function public.handle_new_user_role();