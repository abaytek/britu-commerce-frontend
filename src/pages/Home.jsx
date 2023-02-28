import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Announcement,
  Categories,
  Footer,
  NewsLetter,
  Navbar,
  Products,
  ServerProblem,
  Slider,
  CartButton,
  Spinner,
  WishList,
} from '../components';

function Home() {
  const { status } = useSelector((state) => state.products);
  // Toggle wish list
  const [showWishList, setShowWishList] = useState(false);

  return (
    <div>
      <Announcement />
      <Navbar showWishList={showWishList} setShowWishList={setShowWishList} />
      <CartButton />
      <WishList showWishList={showWishList} setShowWishList={setShowWishList} />
      {status === 'pending' && <Spinner />}
      {status === 'rejected' ? (
        <ServerProblem />
      ) : (
        <>
          <Slider />
          <Categories />
          <Products />
          <NewsLetter />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
