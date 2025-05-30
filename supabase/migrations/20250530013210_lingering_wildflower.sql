-- Supabase Migration Script for SalonHub SaaS Platform

-- USERS & PROFILES ----------------------------
-- Create 'profiles' table linked to auth.users
create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  email text unique not null,
  full_name text,
  avatar_url text,
  user_type text check (user_type in ('provider', 'customer')) not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- Trigger to auto-update 'updated_at'
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.handle_updated_at();

-- Trigger to create profile on new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, user_type)
  values (new.id, new.email, 'customer');
  return new;
end;
$$ language plpgsql;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Enable RLS and create policies on profiles
alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);


-- ROLES ----------------------------------------
-- Define enum for role values
create type user_role as enum ('admin', 'provider', 'customer');

-- User roles table
create table public.user_roles (
  user_id uuid primary key references auth.users on delete cascade,
  role user_role not null default 'customer',
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- RLS for roles
alter table public.user_roles enable row level security;

create policy "Users can view their own role"
  on public.user_roles for select
  using (auth.uid() = user_id);

-- Trigger to assign role on signup
create or replace function public.handle_new_user_role()
returns trigger as $$
begin
  insert into public.user_roles (user_id, role)
  values (new.id, 'customer');
  return new;
end;
$$ language plpgsql;

create trigger on_auth_user_role_created
  after insert on auth.users
  for each row execute function public.handle_new_user_role();


-- SERVICE PROVIDERS ----------------------------
create table public.providers (
  id uuid primary key references public.profiles(id) on delete cascade,
  business_name text not null,
  website_url text,
  description text,
  location text,
  instagram_handle text,
  custom_domain text,
  subdomain text unique,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.providers enable row level security;

create policy "Providers can manage their profile"
  on public.providers for all
  using (auth.uid() = id);


-- SUBSCRIPTION PLANS ---------------------------
create table public.plans (
  id uuid primary key default gen_random_uuid(),
  provider_id uuid references public.providers(id) on delete cascade,
  title text not null,
  description text,
  price numeric(10,2) not null,
  billing_cycle text check (billing_cycle in ('monthly', 'bi-monthly', 'quarterly')) not null,
  visit_frequency int,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.plans enable row level security;

create policy "Providers can manage their own plans"
  on public.plans for all
  using (auth.uid() = provider_id);


-- CUSTOMER SUBSCRIPTIONS ------------------------
create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references public.profiles(id) on delete cascade,
  plan_id uuid references public.plans(id) on delete cascade,
  provider_id uuid references public.providers(id),
  status text check (status in ('active', 'paused', 'cancelled')) default 'active',
  start_date timestamptz default now(),
  next_billing_date timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.subscriptions enable row level security;

create policy "Customers can view and manage their own subscriptions"
  on public.subscriptions for all
  using (auth.uid() = customer_id);


-- APPOINTMENTS / VISIT TRACKING ------------------
create table public.appointments (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references public.profiles(id) on delete cascade,
  provider_id uuid references public.providers(id) on delete cascade,
  service text,
  scheduled_at timestamptz not null,
  status text check (status in ('upcoming', 'completed', 'cancelled')) default 'upcoming',
  created_at timestamptz default now()
);

alter table public.appointments enable row level security;

create policy "Providers can manage their appointments"
  on public.appointments for all
  using (auth.uid() = provider_id);

create policy "Customers can view their appointments"
  on public.appointments for select
  using (auth.uid() = customer_id);


-- TESTIMONIALS & REVIEWS ------------------------
create table public.testimonials (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references public.profiles(id),
  provider_id uuid references public.providers(id),
  rating int check (rating between 1 and 5),
  message text,
  created_at timestamptz default now()
);

alter table public.testimonials enable row level security;

create policy "Public can read testimonials"
  on public.testimonials for select
  using (true);

create policy "Customers can create testimonials"
  on public.testimonials for insert
  with check (auth.uid() = customer_id);
