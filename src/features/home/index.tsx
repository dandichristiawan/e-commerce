import Card from '@/components/card/card';
import { useEffect, useState } from 'react';
import { Products } from './libs/types';
import { getAllProducts } from './libs/api';
import { Pagination } from '@/components/pagination/pagination';
import { CardSkeleton } from '@/components/card/card-skeleton';

const Home = () => {
  const [data, setData] = useState<Products>();
  const [loading, setLoading] = useState<boolean>(false);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    async function get() {
      setLoading(true);
      try {
        const data = await getAllProducts(skip);
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    get();
  }, [skip]);
  return (
    <>
      <>
        {loading ? (
          <div className="flex justify-center my-10">
            <CardSkeleton />
          </div>
        ) : (
          <>
            {data && (
              <>
                <Card product={data?.products} />
                <div className="flex justify-center my-10">
                  <Pagination
                    limit={data!.limit}
                    skip={skip}
                    total={data!.total}
                    setPage={setSkip}
                  />
                </div>
              </>
            )}
          </>
        )}
      </>
    </>
  );
};

export default Home;
