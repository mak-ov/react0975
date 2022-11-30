import pageImg from "../assets/img/sea.jpg";
import textBackground from "../assets/img/sea_2.png";

const Messages = () => {
  return (
    <>
    <div className="row">
      <div className="col-md-6">
        <img src={pageImg} alt="" width={"100%"}/>
      </div>
      <div className="col-md-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolor, accusantium labore esse omnis natus hic ad nobis. Atque aliquam suscipit perferendis nam vitae cum architecto modi repudiandae odio at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur pariatur consectetur delectus eveniet minus, odit hic consequatur aliquid iusto enim deserunt et dolores quas similique tempore, necessitatibus nesciunt. Minima, dignissimos.
      </div>
    </div>
    <div className="row mt-4">
    <div className="col-md-6 offset-6" style={{ backgroundImage: `url(${textBackground})` }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quos adipisci ipsum sed quidem laboriosam ducimus culpa dolores, fugiat cupiditate. Eligendi temporibus exercitationem sed quisquam voluptatibus, incidunt ipsa est quaerat.
    </div>
    </div>
    </>
  )
};

export default Messages;