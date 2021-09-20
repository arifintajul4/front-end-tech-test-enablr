import Card from "../components/Card";
import Navigation from "../components/Navigation";

export default function Vision() {
    return (
        <div>
            <Navigation page="vision" />
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5">
                <div className="lg:col-span-2 order-last md:order-first">
                    <Card>
                        <img
                            src="img/vision.png"
                            alt="About"
                            className="w-full mx-auto py-10"
                        />
                    </Card>
                </div>
                <div className="lg:col-span-3 md:col-span-2">
                    <div>
                        <h1 className="font-bold text-5xl text-purple-dark mb-7">
                            Vision Mission
                        </h1>
                        <div className="mb-5">
                            <h2 className="font-bold text-xl text-purple-dark mb-2">
                                Our Vision
                            </h2>
                            <p className="text-purple font-semibold">
                                Becoming number one preferred digital platform
                                of international trades for Indonesia and the
                                world.
                            </p>
                        </div>
                        <div className="mb-5">
                            <h2 className="font-bold text-xl text-purple-dark mb-2">
                                Our Mission
                            </h2>
                            <p className="text-purple font-semibold">
                                Empowering Indonesia’s MSME nationwide to go
                                international, collaboration with all supporting
                                function such as financial, supply chain and
                                logistic, and expanding international network by
                                building partnership with overseas well known
                                digital platform.
                            </p>
                        </div>
                        <div className="mb-5">
                            <h2 className="font-bold text-xl text-purple-dark mb-2">
                                Values
                            </h2>
                            <ol className="list-decimal pl-4 text-purple font-semibold">
                                <li>Simple</li>
                                <li>Trustworthy</li>
                                <li>Problem Solver</li>
                            </ol>
                        </div>
                        <img
                            src="./img/indo-map.svg"
                            alt="Indonesian Map"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
