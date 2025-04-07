import Layout from "../components/Layout";
import { getNewCategoriesEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsList } from "../api/adaptor";
import NewsCardList from "../components/NewsCardList";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
    // Generam endpointurile pentru categoriile de știri
    const techNewsEndpoint = getNewCategoriesEndpoint("technology", 1, 6);
    const footballNewsEndpoints = getNewCategoriesEndpoint("football", 1, 6);
    const businessNewsEndpoints = getNewCategoriesEndpoint("business", 1, 6);
    const environmentNewsEndpoints = getNewCategoriesEndpoint("environment", 1, 6);
    const sciencesNewsEndpoints = getNewCategoriesEndpoint("science", 1, 6);

    // Fetch-uim datele de la server
    const techData = useFetch(techNewsEndpoint);
    const footballData = useFetch(footballNewsEndpoints);
    const businessData = useFetch(businessNewsEndpoints);
    const environmentData = useFetch(environmentNewsEndpoints);
    const sciencesData = useFetch(sciencesNewsEndpoints);

    // Adaugam/parsam datele venite de la server:
    const adaptedTechData = getNewsList(techData);
    const adaptedFootballData = getNewsList(footballData);
    const adaptedBusinessData = getNewsList(businessData);
    const adaptedEnvironmentData = getNewsList(environmentData);
    const adaptedSciencesData = getNewsList(sciencesData);

    return (
        <Layout>
            <section className="tech my-5">
                <Container>
                    <h1 className="mb-5 pt-3">Tech</h1>
                    <NewsCardList newsList={adaptedTechData} />
                    <p>
                        Vezi toate știrile legate de tehnologie în secțiunea:{" "}
                        <Link to="/category/technology" className="text-secondary">
                            Tech
                        </Link>
                    </p>
                </Container>
            </section>
            <section className="business my-5">
                <Container>
                    <h1 className="mb-5 pt-3">Business</h1>
                    <NewsCardList newsList={adaptedBusinessData} />
                    <p>
                        Vezi toate știrile legate de afaceri în secțiunea:{" "}
                        <Link to="/category/business" className="text-secondary">
                            Business
                        </Link>
                    </p>
                </Container>
            </section>
            <section className="environment my-5">
                <Container>
                    <h1 className="mb-5 pt-3">Environment</h1>
                    <NewsCardList newsList={adaptedEnvironmentData} />
                    <p>
                        Vezi toate știrile legate de mediu în secțiunea:{" "}
                        <Link to="/category/environment" className="text-secondary">
                            Environment
                        </Link>
                    </p>
                </Container>
            </section>
            <section className="sciences my-5">
                <Container>
                    <h1 className="mb-5 pt-3">Sciences</h1>
                    <NewsCardList newsList={adaptedSciencesData} />
                    <p>
                        Vezi toate știrile legate de știință în secțiunea:{" "}
                        <Link to="/category/science" className="text-secondary">
                            Sciences
                        </Link>
                    </p>
                </Container>
            </section>
            <section className="tech my-5">
                <Container>
                    <h1 className="mb-5 pt-3">Football</h1>
                    <NewsCardList newsList={adaptedFootballData} />
                    <p>
                        Vezi toate stirile legate de fotbal in sectiunea:{" "}
                        <Link to="/category/football" className="text-secondary">
                            Football
                        </Link>
                    </p>
                </Container>
            </section>
            <section className="my-5">
                <Container>
                    <h1 className="mb-5 pt-3">Favorite</h1>
                    <p>
                        Vrei sa iti salvezi stirile favorite pentru a le reciti mai tarziu?
                    </p>
                    <p>
                        In cadrul fiecarei stiri gasesti un buton prin care poti adauga
                        stirea la favorite
                    </p>
                    <p>
                        Vezi sectiunea:{" "}
                        <Link to="/favorites" className="text-secondary">
                            Favorite
                        </Link>
                    </p>
                </Container>
            </section>
        </Layout>
    );
}
