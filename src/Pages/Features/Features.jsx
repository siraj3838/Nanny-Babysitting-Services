import FeaturesApp from "../../Components/ReUsed/Banner/FeaturesApp/FeaturesApp";
import FeaturesBanner from "../../Components/ReUsed/Banner/FeaturesBanner/FeaturesBanner";
import Navbar from "../../Components/ReUsed/Navbar/Navbar";

const Features = () => {
    return (
        <div>
            <Navbar></Navbar>
            <FeaturesBanner></FeaturesBanner>
            <FeaturesApp></FeaturesApp>
        </div>
    );
};

export default Features;