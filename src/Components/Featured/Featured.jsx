import "./Featured.css";

const Featured = () => {
  return (
    <>
      <div className="featured">
        <div className="featuredItem">
          <img
            src="https://metro.co.uk/wp-content/uploads/2016/11/537856138.jpg?quality=90&strip=all&zoom=1&resize=964%2C641"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>New York</h1>
            <h2>100 properties</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img
            src="https://th.bing.com/th/id/R.9fdfa716cb3c3c76fadb7796e9f70b60?rik=BrYb5SOhbxsQHw&riu=http%3a%2f%2fmedia.cntraveller.in%2fwp-content%2fuploads%2f2014%2f02%2fJal-Mahal-Jaipur-123rf-2.jpg&ehk=wHcmmXvbEUT3JO239QG2%2feeuMFZTQXL%2bS%2fwnR66o0Vg%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Jaipur</h1>
            <h2>210 properties</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Reno</h1>
            <h2>533 properties</h2>
          </div>
        </div>
      </div>
      <div className="featured">
        <div className="featuredItem">
          <img
            src="https://th.bing.com/th/id/OIP.o95BDoJ-TLexWqSR4T-HTAHaE8?pid=ImgDet&rs=1"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>532 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://th.bing.com/th/id/OIP.gJT1KKvvgRRNIwjxCVNXuQHaEP?pid=ImgDet&rs=1"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img
            src="https://th.bing.com/th/id/OIP.UbnHbrCPdmP77IcOam1MuAHaE7?pid=ImgDet&rs=1"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Swizerland</h1>
            <h2>129 properties</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
