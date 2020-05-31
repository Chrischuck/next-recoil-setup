import dynamic from 'next/dynamic';
const RecoilWrapper = dynamic(() => import('Components/RecoilWrapper'), {
  ssr: false,
});

const App = ({ Component, pageProps }) => {
  // looks like recoil uses window under the hood
  // and this isn't ssr compatible atm!
  // so we'll just have to opt out of ssr completely
  return (
    <RecoilWrapper>
      <Component {...pageProps} />
    </RecoilWrapper>
  );
};

export default App;
