export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  user_type: 'provider' | 'customer';
  created_at: string;
  updated_at: string;
};

export type UserRole = {
  user_id: string;
  role: 'admin' | 'provider' | 'customer';
  created_at: string;
  updated_at: string;
};

export type Provider = {
  id: string;
  business_name: string;
  website_url: string | null;
  description: string | null;
  location: string | null;
  instagram_handle: string | null;
  custom_domain: string | null;
  subdomain: string | null;
  created_at: string;
  updated_at: string;
};

export type Plan = {
  id: string;
  provider_id: string;
  title: string;
  description: string | null;
  price: number;
  billing_cycle: 'monthly' | 'bi-monthly' | 'quarterly';
  visit_frequency: number | null;
  created_at: string;
  updated_at: string;
};

export type Subscription = {
  id: string;
  customer_id: string;
  plan_id: string;
  provider_id: string;
  status: 'active' | 'paused' | 'cancelled';
  start_date: string;
  next_billing_date: string | null;
  created_at: string;
  updated_at: string;
};

export type Appointment = {
  id: string;
  customer_id: string;
  provider_id: string;
  service: string | null;
  scheduled_at: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  created_at: string;
};

export type Testimonial = {
  id: string;
  customer_id: string;
  provider_id: string;
  rating: number;
  message: string | null;
  created_at: string;
};

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Profile, 'id' | 'created_at' | 'updated_at'>>;
      };
      user_roles: {
        Row: UserRole;
        Insert: Omit<UserRole, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<UserRole, 'user_id' | 'created_at' | 'updated_at'>>;
      };
      providers: {
        Row: Provider;
        Insert: Omit<Provider, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Provider, 'id' | 'created_at' | 'updated_at'>>;
      };
      plans: {
        Row: Plan;
        Insert: Omit<Plan, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Plan, 'id' | 'created_at' | 'updated_at'>>;
      };
      subscriptions: {
        Row: Subscription;
        Insert: Omit<Subscription, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Subscription, 'id' | 'created_at' | 'updated_at'>>;
      };
      appointments: {
        Row: Appointment;
        Insert: Omit<Appointment, 'id' | 'created_at'>;
        Update: Partial<Omit<Appointment, 'id' | 'created_at'>>;
      };
      testimonials: {
        Row: Testimonial;
        Insert: Omit<Testimonial, 'id' | 'created_at'>;
        Update: Partial<Omit<Testimonial, 'id' | 'created_at'>>;
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      user_role: 'admin' | 'provider' | 'customer';
    };
  };
}