import Hello from '../components/Hello';
import Image from 'next/image';

const Layout = ({children}) => (
  <div className="container">
  <Image src="https://live.staticflickr.com/5602/15148173434_aca29790c3_k.jpg" width={600} height={400} alt="Header" />
    <Hello />
    {children}
  </div>
);

export default Layout;