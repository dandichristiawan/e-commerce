import { MainLayout } from '@/layouts/main-layouts';
import { ProductDetail } from '@/features/product-detail';

export const ProductDetailPage = () => {
  return (
    <>
      <MainLayout>
        <ProductDetail />
      </MainLayout>
    </>
  );
};
