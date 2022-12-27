import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@components/templates/index';
import { RestaurantInfo } from '@components/organisms/index';

const Profile: FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('navigate', navigate);
  }, [navigate]);

  return (
    <Layout>
      {/* restaurant && <RestaurantInfo restaurant={restaurant} /> */}
      {loading && <div>Loading...</div>}
    </Layout>
  );
};

export default Profile;
