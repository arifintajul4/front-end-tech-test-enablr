import Card from "../components/Card";
import Navigation from "../components/Navigation";

export default function Index() {
    return (
        <div>
            <Navigation page="about" />
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5">
                <div className="lg:col-span-2 order-last md:order-first">
                    <Card>
                        <img
                            src="img/about.png"
                            alt="About"
                            className="w-full mx-auto py-10"
                        />
                    </Card>
                </div>
                <div className="lg:col-span-3 md:col-span-2">
                    <div>
                        <h1 className="font-bold text-4xl text-purple-dark mb-7">
                            About Us
                        </h1>
                        <div className="font-semibold">
                            <p className="text-purple mb-10">
                                Spanning from East to West. With 54,000 km
                                Coastline and 17,500 Islands.
                            </p>
                            <p className="text-purple-light font-semibold mb-10">
                                INDONESIA, a resourceful land. Rich of flavors,
                                natural beauties, and biodiversity.
                            </p>
                            <p className="text-purple">
                                62trade.com ready to take important role to
                                empower international trades between Indonesia
                                and the rest of the world.
                                <br />
                                <br />
                                Ready to be a digital gateway for everyone, at
                                any level of business.
                                <br />
                                <br />
                                Let us walk together, hand in hand for a better
                                future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
