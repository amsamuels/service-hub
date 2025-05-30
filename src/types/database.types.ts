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
    };
  };
}