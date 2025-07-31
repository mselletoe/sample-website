import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeSections from './components/HomeSections';
import Footer from './components/Footer';
// Figma MCP layout code
const imgPillBoxArrangementStillLife1 = "http://localhost:3845/assets/2f0fffa8ab6d0b6246b3b3b7187c672966e9fbf7.png";
const imgPillsPremiumStockPhotoFlatBackground1 = "http://localhost:3845/assets/defb779c151604d1c66e67f50f77ad426e7f7cc7.png";
const imgCapsuleHerbalMedicineWithStethoscopeWoodenBackground1 = "http://localhost:3845/assets/dfc47b8a3d6bff2556a10bd47d8f5e051a779215.png";
const imgFrontCloseViewSickYoungFemaleFeelingVeryIllTakingPillsWhiteSurface2 = "http://localhost:3845/assets/4d34f0481ebd86b4ba6393be3872bbebd07c12db.png";
const imgEllipse31 = "http://localhost:3845/assets/6f82df34bbc4964c2241cc7bb3cbc5db00292c3c.png";
const imgManWithBeardShirtThatSaysHeIsSmiling1 = "http://localhost:3845/assets/b14e79d887aec54da160ac358cdb94300bf8098c.png";
const imgSatisfiedCharmingManWithBristleHoldingSmartphoneNearChest1 = "http://localhost:3845/assets/d104bf010640c3474bc616303b1da594dfc66405.png";
const imgGirl1 = "http://localhost:3845/assets/fee2eee27450d98e73d0fab7cd35503c04c054ed.png";
const imgManWithHisArmsCrossedSmiling4 = "http://localhost:3845/assets/4978f139e76bd473a607f787b99756e7a54ed4cf.png";
const imgYoungWomanTakingDietarySupplementVitaminOmega3HealthFishOilSoftgelVitaminDVitaminCSupportImmunityDiseasePrevention1 = "http://localhost:3845/assets/beda6adafb6158174398796d1c6b84ba2f4dc846.png";
const imgBottlePillsWithWhiteLabelThatSaysNoPills2 = "http://localhost:3845/assets/7a7714fc7a867ca9de5ce9bbcc20be86bfa28eb7.png";
const imgBlueAsthmaInhalerAgainstWhiteBackground1 = "http://localhost:3845/assets/5c61909cbc6825ce42b799eeba7100ddfbe8b8e7.png";
const imgHealthCareConceptMedicalBackgroundWithStethoscopeStethoscopeMedicalStethoscopeEquipmentMedicineStethoscopeIllustration1 = "http://localhost:3845/assets/7e61532d00b79be0ff0d26f80ad5393a1de6ebf5.png";
const imgMedicalProtectiveGlovesStyle = "http://localhost:3845/assets/faac865f08699aee2c8919054a22ea340e615c85.png";
const imgMedicalDeviceSetTonometerGlucometerBloodGlucoseMeterPulseOximeterEcgElectrocardiographHealthCareEquipmentCollection3 = "http://localhost:3845/assets/a4e91418c983773c985864178c370848489b498a.png";
const imgMedicineAd1 = "http://localhost:3845/assets/dc9e7413a10edcf6eeb6c7478aacdf0bcaa74857.png";
const img21583Bb039Fb45A28D48A808362Acb452 = "http://localhost:3845/assets/5b77ce6b24624735a264d07405ae77ed4256ed09.png";
const imgRb322241 = "http://localhost:3845/assets/f07b2098fc87998e45f87a3f40dee2ade09b3a97.png";
const imgSleekPulseOximeterWithSoftAmbientLighting = "http://localhost:3845/assets/e8357dd2fa8f22a80590f382c2e31875e96430f7.png";
const imgDownload2 = "http://localhost:3845/assets/9dbaf289c4d6b79af24e5d1e9e2b2b0cd44659dd.png";
const imgRealisticHandSanitizerBottle3DStyle1 = "http://localhost:3845/assets/3defb8c40a14a7d49bae2729167476b576509a3e.png";
const imgRb21476391081 = "http://localhost:3845/assets/f578ff3b139d81cccb5c1f6688e06f160b339ee5.png";
const imgRealisticMedicalMaskWithShadows1 = "http://localhost:3845/assets/39ec9ab415f86c0288c2858620b9b187b8ecd9e5.png";
const imgJarPillsWithGoldTopThatSaysgoldonIt1 = "http://localhost:3845/assets/194198daee3216e0be00a55c4ca3203dd51f9ce2.png";
const imgBottlePillsThatIsLabeledWithWordsPillBottom1 = "http://localhost:3845/assets/714512afaa1ea2e543fab0e2c396fab0daa6cfe0.png";
const imgAmberBottleFullPillsSittingTableWithBlankLabelBranding1 = "http://localhost:3845/assets/48535412c3d7b624d3deb5fa8d9a980648f70d7b.png";
const imgVector = "http://localhost:3845/assets/7ae93163c9f307bf513080ac417db2ec53cd4e6b.svg";
const imgFi5418967 = "http://localhost:3845/assets/a2faf1cebc5eeb833f066faf55064327e19c3288.svg";
const imgFi11502423 = "http://localhost:3845/assets/ddf42c61d432a04b3b2204ed5499d9ce86104876.svg";
const imgFi2198371 = "http://localhost:3845/assets/7bea83852e24cc75e91d7dedfc9773ab017cf70b.svg";
const imgLogo2 = "http://localhost:3845/assets/4fa03746972dc71dcb31da7b8a3ae6d410c23186.svg";
const img = "http://localhost:3845/assets/105deb8150c01cd34eb9499df69f0913253b6cfd.svg";
const imgLine8 = "http://localhost:3845/assets/cc6b2f7b74d57dbe4a280ad0c4eec174b85cecf1.svg";
const imgX301Facebook = "http://localhost:3845/assets/98113395e265c145f3c779c1e070a3506918b249.svg";
const imgInstagram = "http://localhost:3845/assets/7ab981272451646244fe6a5a5e8935cddb340395.svg";
const imgTwitter = "http://localhost:3845/assets/a50b983ef54b4362c2d078534b86b333f4fd3fc5.svg";
const imgX302YouTube1 = "http://localhost:3845/assets/ad0fd95de895a475efbe2d2e31d483481aa1f5ed.svg";
const imgEllipse26 = "http://localhost:3845/assets/30ba831eddf1a059502acc53fc3509b96038f6d7.svg";
const imgPillBoxArrangementStillLife2 = "http://localhost:3845/assets/6819d696a0f6c33323d849943d1d80388923cc65.svg";
const imgPillsPremiumStockPhotoFlatBackground2 = "http://localhost:3845/assets/052bb820592d3af3e0317da1ae3e0f8f81086651.svg";
const imgCapsuleHerbalMedicineWithStethoscopeWoodenBackground2 = "http://localhost:3845/assets/5a8131dcbae3d4f61e4ab5ca93fc18e148c5368e.svg";
const imgFrontCloseViewSickYoungFemaleFeelingVeryIllTakingPillsWhiteSurface3 = "http://localhost:3845/assets/93c46200e31b2f1209a4c2714e8a3a256002a30f.svg";
const imgEllipse30 = "http://localhost:3845/assets/bf76757e31e11ea1e3725dc7a864fe0aa1437e61.svg";
const imgManWithBeardShirtThatSaysHeIsSmiling2 = "http://localhost:3845/assets/fb1fbaac93082f1974d6cad7df71515caaad7366.svg";
const imgContent040CloseQuoteTextTypeEditor = "http://localhost:3845/assets/5af9b8702a49fb2a4b8fefd2d924a386c269140a.svg";
const imgGroup = "http://localhost:3845/assets/9e56cdfdd191e7acad9aae8f8ec444569a90dd13.svg";
const imgGroup221 = "http://localhost:3845/assets/9960fe59ae79d5b09832aa8caf1c246ca4f589cc.svg";
const imgFi11502424 = "http://localhost:3845/assets/3ebc5c95fcde3346ffda1079e7abedebd4fdcfd5.svg";
const img1 = "http://localhost:3845/assets/7b9d0108b0f7def36bea14c728c5d93595736ef1.svg";
const imgYoungWomanTakingDietarySupplementVitaminOmega3HealthFishOilSoftgelVitaminDVitaminCSupportImmunityDiseasePrevention2 = "http://localhost:3845/assets/309a5c794631a384cd4a4dd05a27874bd1926ad2.svg";
const imgLogo3 = "http://localhost:3845/assets/1a2c85791f19c589727e685f9403981f06e7bbd7.svg";
const imgLogo4 = "http://localhost:3845/assets/c35f74ff84bfaa2231fbf2005ca6f208cfd51773.svg";
const imgLine14 = "http://localhost:3845/assets/f8dbacbc5bc1ca4405187a4336956ca125793800.svg";
const imgLogo5 = "http://localhost:3845/assets/b94e45eba96356c2ffda8df1ccf09b3a1f5296a3.svg";
const imgLogo6 = "http://localhost:3845/assets/6b9f1762456350eea84ff93340d48cf24e6117ad.svg";
const img2 = "http://localhost:3845/assets/877a44a8ec003b21c83750c1c2f3d54e1e7e1cd8.svg";
const img3 = "http://localhost:3845/assets/8d8373d2a7226e441f6a63180f9dc4bdb094ba40.svg";
const imgLine15 = "http://localhost:3845/assets/c1527020d97c7c6ec3ee231a42f60c88d3406974.svg";
const imgGroup173 = "http://localhost:3845/assets/23e42f1aac4ca37c2175545121b6e04968de3926.svg";
const imgGroup174 = "http://localhost:3845/assets/579c7822af1eca34abcef05f7dbfbed598d776ed.svg";
const imgVector1 = "http://localhost:3845/assets/591676c3f15af35b5e4bc235ff8eed4051dab6c8.svg";
const imgVector2 = "http://localhost:3845/assets/baaa0a298046b513ca2b8eb03b49ead019167661.svg";
const img4 = "http://localhost:3845/assets/5ae4537eddb6993a1d5fa4e34002f3b2135b6cf3.svg";
const img5 = "http://localhost:3845/assets/841dca1ee419905f0e1fb5939ff3e30d8782fded.svg";
const imgLine16 = "http://localhost:3845/assets/c36561b5458052c4ebe440cacea33885fdb3d6cb.svg";
const imgGroup1 = "http://localhost:3845/assets/eb19b7297bb386ee73f666baec37ef1338a8a65d.svg";
const imgGroup2 = "http://localhost:3845/assets/95cfe1a7c2ae9cf55c9e551cc910298657672e09.svg";
const imgGroup3 = "http://localhost:3845/assets/701195b7b450e43155e1867bfbf5ffb13dab0fe1.svg";
const imgGroup4 = "http://localhost:3845/assets/fefac0e2ae3bfe4e834b9c3e348c99cc0c06fa7a.svg";
const imgGroup5 = "http://localhost:3845/assets/e7a47669c7d657f7e1698b00393ccdcfc660becc.svg";
const imgGroup6 = "http://localhost:3845/assets/eff08eb6048413e5a229cff6afaa81b59f5e0fcf.svg";
const imgGroup7 = "http://localhost:3845/assets/0af5c34cc27e2408c7edf07b1c057c7286dd06cd.svg";
const imgXmlid25 = "http://localhost:3845/assets/ab24f0ef43b389b16d39487c2ea7e9d8dcf8836e.svg";
const imgEllipse17 = "http://localhost:3845/assets/2b2b2b9d27771b8d24711765d62846a41369c0d2.svg";
const imgEllipse15 = "http://localhost:3845/assets/2ffb7b2ba4afae90b0a8a9e8244ece0ad1216cf6.svg";
const img6 = "http://localhost:3845/assets/62d62ac5fffa1f39441c4bc1a7a2fabc2c6f714b.svg";
const img7 = "http://localhost:3845/assets/79e7ba5ac62d615f3bfbb7885ba5b79cea62c830.svg";
const imgLine17 = "http://localhost:3845/assets/33a56d27743a8359942c4f6cc9d6f7cf03debd74.svg";
const imgEllipse18 = "http://localhost:3845/assets/519e865e84488a2a08ae881003c4f496579f7872.svg";
const imgEllipse20 = "http://localhost:3845/assets/e9cb2c9891a4fbaa4670311792544eeba6e6a5d5.svg";
const imgEllipse21 = "http://localhost:3845/assets/bc23a268685f8bb828eaf08f9b4c01fe2cd8ee17.svg";
const imgLine18 = "http://localhost:3845/assets/6045684039f7f812f7fa4215aa98b1e20ef50ec6.svg";
const imgVector3 = "http://localhost:3845/assets/691e06a78211fadd72133d307f3ea348a6015515.svg";
const imgRectangle88 = "http://localhost:3845/assets/adb9437dcb26fc791cae3206501fb28a9a1f9478.svg";
const img8 = "http://localhost:3845/assets/81fc109e3b2ffa564343812c03b72658f72e69b2.svg";
const img9 = "http://localhost:3845/assets/6e3c6f9d30da65f05b8adebd264e6b58487d2220.svg";
const imgLine19 = "http://localhost:3845/assets/458377d4b74c16eaf89aa1b24df5cbc9930fdb7c.svg";
const img10 = "http://localhost:3845/assets/a0b34709f56840bac6d730d67637beb3c5f63808.svg";
const img11 = "http://localhost:3845/assets/ba4e2e6a6ebd2eef4e0deb870116221972c2e26d.svg";
const img12 = "http://localhost:3845/assets/2f486a1d5e97b4726ea695ad46f473b5a50df760.svg";
const img13 = "http://localhost:3845/assets/e14614f4ecbd278c8941ad78cd665f1171dad091.svg";
const img14 = "http://localhost:3845/assets/cb1bda23b7a9e2f0f63993b28216c8231b32fdb8.svg";
const img15 = "http://localhost:3845/assets/a4b775be25832b6fd05a1137b65e2c05e09b29cf.svg";
const img16 = "http://localhost:3845/assets/8b1daaa031148d1e384366ce3d819efdb9f4bb39.svg";
const img17 = "http://localhost:3845/assets/d09e72914bb0c9bab263492a02503bb0f0ad4e37.svg";
const img18 = "http://localhost:3845/assets/ca1a3f8b73b8abaa137c5d60447d065d6c59b1d1.svg";
const img19 = "http://localhost:3845/assets/e1ece9301a160bee242dd45a24eb5f45104f11f7.svg";
const img20 = "http://localhost:3845/assets/cf96f16fb7bb64ba0850b18d0179febd39868f7e.svg";
const imgGroup217 = "http://localhost:3845/assets/707511ccc443a2b9aff3e8781adf4fe36d8bdca2.svg";
const imgGroup8 = "http://localhost:3845/assets/6d343a397c2897998c70c886bcf02cbb4b5fa8db.svg";
const imgGroup9 = "http://localhost:3845/assets/b79fa0fe5210794a08b9aedf4b81b5846fedc393.svg";
const img21 = "http://localhost:3845/assets/825e6b3f6c24a07f0f6612978ef5f4ffd88f1702.svg";
const imgEllipse12 = "http://localhost:3845/assets/fdc200fc44273c82f32d45af73717d990e02f4d2.svg";
const imgGroup10 = "http://localhost:3845/assets/6b84f715653a62e1447847650e4403f9d402d639.svg";
const imgGroup11 = "http://localhost:3845/assets/e371802d3351a9e27596681a85482af7d0fcb183.svg";
const imgGroup12 = "http://localhost:3845/assets/738ca7b78a50f4556d1955b1c1f4eb4a41ed5fd8.svg";
const imgGroup13 = "http://localhost:3845/assets/edd8428f44700c47b695d88f73faf7a26f0d120e.svg";
const imgGroup14 = "http://localhost:3845/assets/d8b8a07c576def2f6f20865b65366291857a9a9b.svg";
const imgGroup15 = "http://localhost:3845/assets/1268efbc9fa9098e6b36742aab8d2699bb1a0c2a.svg";
const imgGroup16 = "http://localhost:3845/assets/5d4beb01137c9bd2bb583770e1543a9c423c6b2d.svg";
const imgGroup17 = "http://localhost:3845/assets/b9d8c66d1a4993c1152ce5cb2b75ac00eecd949b.svg";
const imgGroup18 = "http://localhost:3845/assets/ebca24750a19e653baf88fa4430a8a612ed46d2c.svg";
const imgLogo7 = "http://localhost:3845/assets/79bee410ff567113defb6b6a43bb0b200f2a18a6.svg";
const imgFi17808404 = "http://localhost:3845/assets/39b7fcb0cb54bbe5731652a7d02bbd44129be8f9.svg";
const img22 = "http://localhost:3845/assets/2ab7cffbe6d2563e361b5565281db5465ac340f5.svg";
const img23 = "http://localhost:3845/assets/f6c28e98b04e7094fc8a89d399ea02dcf18c78a1.svg";
const imgVector4 = "http://localhost:3845/assets/13aa10f697837c8fc5a58a5ee7375a9930ede6e7.svg";
const img24 = "http://localhost:3845/assets/7b1f1d6f6324b8a2be446886d30d03a6189c3a94.svg";
const img25 = "http://localhost:3845/assets/8a7297fff418be87611c9b4e3fc0c0f191809b50.svg";
const imgFrame = "http://localhost:3845/assets/5ff2e9b72b44becd5c548d07f13bcc85c45b9ce2.svg";
const img26 = "http://localhost:3845/assets/1871811616ae9f59e3b4cf92423134a134a8a760.svg";

export default function MedicalStore() {
  return (
    <div className="bg-[#eeede7] min-h-screen flex flex-col items-center justify-center p-10">
      <main className="flex-1 flex flex-col items-center justify-start">
        <Navbar />
        <Hero />
        <HomeSections />
      </main>
      <Footer />
    </div>
  );
}
