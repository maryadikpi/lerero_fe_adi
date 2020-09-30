//import 'public/plugins/jquery/jquery.min.js'
//import 'public/plugins/bootstrap/js/bootstrap.bundle.min.js'
//import 'public/dist/js/adminlte.min.js'

const Header = () => (
  <header>
   <link
      rel="stylesheet"
      href="public/plugins/fontawesome-free/css/all.min.css"
    />
    <link
      rel="stylesheet"
      href="public/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
    />

    <link rel="stylesheet" href="/dist/css/ionicons.min.css" />
    <link rel="stylesheet" href="/dist/css/adminlte.min.css" />
    <link rel="stylesheet" href="/dist/css/custom.css" />
    <link rel="stylesheet" href="/dist/css/google-font.css" />

    <script src={process.env.NEXT_PUBLIC_JS_ASSET_PATH+"/plugins/jquery/jquery.min.js"}></script>
    <script src={process.env.NEXT_PUBLIC_JS_ASSET_PATH+"/plugins/bootstrap/js/bootstrap.bundle.min.js"}></script>
    <script src={process.env.NEXT_PUBLIC_JS_ASSET_PATH+"/dist/js/adminlte.min.js"}></script>
    <script src={process.env.NEXT_PUBLIC_JS_ASSET_PATH+"/plugins/chart.js/Chart.min.js"}></script>
    <script src={process.env.NEXT_PUBLIC_JS_ASSET_PATH+"/dist/js/pages/dashboard3.js"}/>
  </header>
);

export default Header;
