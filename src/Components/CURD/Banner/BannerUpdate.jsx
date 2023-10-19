

const BannerUpdate = () => {


    const updateBanner = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const link = form.btnLink.value;
        const photo = form.photo.value;

        const categoriesItem = { title, link, photo }
        console.log(categoriesItem);

        fetch(`http://localhost:5000/categories/carousel`,{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(categoriesItem)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="bg-[#F4F3F0] md:p-24">
            <h2 className="text-3xl font-extrabold">Update Banner:</h2>
            <form onSubmit={updateBanner}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Banner Sub-title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subTitle" placeholder="Banner Sub-title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Banner Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Banner Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Starting Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Starting Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Button Link</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="btnLink" placeholder="Button Link" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Background Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default BannerUpdate;