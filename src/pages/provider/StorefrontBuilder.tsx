import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const StorefrontBuilder = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    description: '',
    logo: null as File | null,
    coverImage: null as File | null,
    primaryColor: '#8b5cf6',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (e.target.files?.length) {
      setFormData({ ...formData, [field]: e.target.files[0] });
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Customize Your Storefront</h1>

      {/* Logo Upload */}
      <Card title="Logo">
        <div className="flex items-center space-x-4">
          {formData.logo ? (
            <img src={URL.createObjectURL(formData.logo)} alt="Logo preview" className="h-16 w-16 rounded object-cover" />
          ) : (
            <div className="h-16 w-16 rounded bg-gray-200 flex items-center justify-center text-gray-500">No Logo</div>
          )}
          <input type="file" onChange={(e) => handleFileChange(e, 'logo')} accept="image/*" />
        </div>
      </Card>

      {/* Brand Colors */}
      <Card title="Brand Colors">
        <label className="block mb-2">Primary Color</label>
        <input
          type="color"
          value={formData.primaryColor}
          onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
          className="h-10 w-20"
        />
      </Card>

      {/* Preview */}
      <Card title="Live Preview">
        <div className="p-6 border rounded-lg bg-white shadow-sm" style={{ backgroundColor: formData.primaryColor }}>
          <h2 className="text-xl font-bold text-white">{formData.businessName || 'Your Business'}</h2>
          <p className="text-white/90">{formData.description || 'A short description about your services.'}</p>
        </div>
      </Card>

      <Button fullWidth>Save Changes</Button>
    </div>
  );
};

export default StorefrontBuilder;