import { AppProps } from 'next/app';
import MyAppBar from '../components/MyAppBar';
import { CssBaseline } from '@mui/material';



export default function App() {
  
  return (
  <>
    <MyAppBar /> {/* In below, there should be the page content. But I could not do it yet, so I added myappbar to every new page. Maybe it is not necessary? */}
  </>
  );
}
