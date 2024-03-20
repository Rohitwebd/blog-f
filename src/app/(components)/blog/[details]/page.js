
export default function Blogdetails({ params }) {
    return (
        <>
            <div>
                <img height={300} width={1400} src="/images/blogdetails-img.jpg" alt="blog-img" />
            </div>

            <div className="blog-section">
                <div className="container">
                    <div className="col-md-12 mb-5">
                        <div className="post-entry">
                            <a href="#" className="post-thumbnail"><img src="../images/post-1.jpg" alt="Image" className="img-fluid" /></a>
                            <div className="post-content-entry">
                                <h2><a href="#">First Time Home Owner Ideas</a></h2>
                                <div className="meta">
                                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                                </div>
                            </div>
                            <h4 className="py-3">Details</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tooka galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentlywith desktop publishing software like Aldus PageMaker zincluding versions of Lorem Ipsum.</p>
                        </div>
                    </div>


                    <div className="col-md-12 mb-5">
                        <div className="post-entry">
                            <a href="#" className="post-thumbnail"><img src="../images/post-2.jpg" alt="Image" className="img-fluid" /></a>
                            <div className="post-content-entry">
                                <h2><a href="#">How To Keep Your Furniture Clean</a></h2>
                                <div className="meta">
                                    <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                                </div>
                            </div>
                            <h4 className="py-3">Details</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tooka galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentlywith desktop publishing software like Aldus PageMaker zincluding versions of Lorem Ipsum.</p>
                        </div>
                    </div>


                    <div className="col-md-12 mb-5">
                        <div className="post-entry">
                            <a href="#" className="post-thumbnail"><img src="../images/post-3.jpg" alt="Image" className="img-fluid" /></a>
                            <div className="post-content-entry">
                                <h2><a href="#">Small Space Furniture Apartment Ideas</a></h2>
                                <div className="meta">
                                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                                </div>
                            </div>
                            <h4 className="py-3">Details</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tooka galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentlywith desktop publishing software like Aldus PageMaker zincluding versions of Lorem Ipsum.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}