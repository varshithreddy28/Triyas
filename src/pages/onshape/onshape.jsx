import React from "react";
import Home from "../../components/Home_pdts/home";
import Logo from "../../assests/onshape_logo.png";
import onshapeBg from "../../assests/onshape_bg.jpg";
import ProductsNav from "../../components/prodyctsNav/productsnav";
import Overview from "../../components/Overview/overview";
import CreoImg from "../../assests/Triyas_Web.png";
import Info from "../../components/Products_Information/info";
import OnShapeFeatures from "../../components/OnShapeFeatures/onshapefeatures";
//
import Data from "../../assests/onshape/datamanagement.svg";
import Team from "../../assests/onshape/team.svg";
import WorkFlow from "../../assests/onshape/workflow.svg";
import Parts from "../../assests/onshape/parts.svg";
import Assemblies from "../../assests/onshape/assembly.svg";
import Drawings from "../../assests/onshape/drawing.svg";
import Bill from "../../assests/onshape/bill.svg";
import Configurations from "../../assests/onshape/configurations.svg";
import Analiytics from "../../assests/onshape/anylatics.svg";
import Integrations from "../../assests/onshape/integration.svg";
import Support from "../../assests/onshape/support.svg";
import Security from "../../assests/onshape/security.svg";
import "./onshape.css";

export default function Onshape() {
  const onshapeFeatures = [
    {
      name: "Data Management",
      content:
        "Integrated version control and release management tools eliminate the necessity of a separate PDM system. Everyone collaborates on the most current design data continuously. Each user's edits are automatically recorded and can be reversed at any time, offering limitless undo/redo capabilities and a well-documented audit trail. Branching and merging support the simultaneous development of multiple product ideas.",
      imageUrl: Data,
    },
    {
      name: "Collaboration",
      content:
        "Collaborate in real-time with simultaneous design edits, witnessing changes instantly. Share design data effortlessly with your team, company, or suppliers, while maintaining precise permissions for viewing, editing, and exporting. Enhance collaboration by adding comments and task assignments to keep everyone aligned. Utilize 'Follow' mode for interactive design reviews, presentations, and seamless collaboration.",
      imageUrl: Team,
    },
    {
      name: "Workflow",
      content:
        "Streamline workflows by automating the management of part releases, assembly revisions, drawings, and imported files. Tailor custom workflows to align with your unique business processes. Enable users to work in parallel while awaiting approval for release candidates. Establish trigger points for notifications and email alerts.",
      imageUrl: WorkFlow,
    },
    {
      name: "Parts",
      content:
        "Effortlessly create intricate solid and surface models employing both top-down and bottom-up approaches. Capture design intent and inter-part relationships by designing components together within a Part Studio. Additionally, enhance Onshape's extensive feature set by implementing custom features crafted with FeatureScript to automate intricate or repetitive design tasks.",
      imageUrl: Parts,
    },
    {
      name: "Assemblies",
      content:
        "Craft well-structured and highly detailed assemblies, utilizing built-in standard hardware and parts linked from other Documents. Easily capture intricate kinematic relationships using a single Mate. Design parts within context and efficiently handle updates. Onshape's distinctive database architecture eliminates the issues of broken links and missing files.",
      imageUrl: Assemblies,
    },
    {
      name: "Drawings",
      content:
        "Generate comprehensive drawings of parts and assemblies with detailed specifications, including dimensions, datums, surface finish and weld symbols, geometric tolerances, notes, tables, balloons, callouts, sheets, and customizable drawing properties. Onshape supports seamless import and export of DWG, DWT, and DXF file formats.",
      imageUrl: Drawings,
    },
    {
      name: "Bill of Materials",
      content:
        "Effortlessly configure and oversee a Bill of Materials (BOM) while making simultaneous edits to an assembly. Easily incorporate non-geometric items with specified quantities and predefined units. Enhance assembly drawings with BOM tables featuring intelligent balloon callouts. Real-time updates guarantee that the BOM remains perfectly synchronized with the assembly it represents.",
      imageUrl: Bill,
    },
    {
      name: "Configurations",
      content:
        "Create intricate families of parts and assemblies using separate tables for each configuration option, significantly reducing the volume of rows and cells. Configuration variables empower endless product variations. Each configuration can maintain its unique part number and revision history.",
      imageUrl: Configurations,
    },
    {
      name: "Analytics",
      content:
        "Monitor project status with Activity, Release, Project, and User Dashboards. Review document access and conduct security reviews. Stay up-to-date with the user activity stream. Users can see and access reports according to Global Permissions.",
      imageUrl: Analiytics,
    },
    {
      name: "Integrations",
      content:
        "Develop your own Onshape integrations via a robust REST API. Extend Onshape to meet your business and engineering needs with ERP, PLM, SSO, simulation, and CAM add-ons available in the Onshape App Store. New partners and integrations are being continuously added.",
      imageUrl: Integrations,
    },
    {
      name: "Support",
      content:
        "Create custom Onshape integrations using our powerful REST API. Tailor Onshape to align with your business and engineering requirements by exploring ERP, PLM, SSO, simulation, and CAM add-ons in the Onshape App Store. We're constantly expanding our network of partners and integrations to provide you with even more options.",
      imageUrl: Support,
    },
    {
      name: "Security",
      content:
        "Safeguard your design data against unauthorized access with role-based access control, AES-256 encryption, optional two-factor authentication, and detailed audit logs. Onshape adheres to SOC 2 Type 2 compliance and is hosted on AWS, ensuring robust security measures. Payments processed through Onshape are PCI compliant for added protection.",
      imageUrl: Security,
    },
  ];

  const home_content = {
    header: "Cloud-Native CAD & PDM",
    content:
      "Accelerated Product Design through Improved Collaboration and Cost Efficiency.",
    logo: Logo,
    back_img:
      "https://www.onshape.com/global-assets/img/resource-center-heroes/zz-migrated-content-archive/1470x848/whats-new-in-the-onshape-app-store-05-18-17_1470x848.jpg",
  };

  const naveles = [
    {
      name: "Introduction",
      id: "introduction_onshape",
    },
    {
      name: "Platform",
      id: "platform_onshape",
    },
    {
      name: "Features & Functionality",
      id: "features",
    },
    {
      name: "Framework",
      id: "framework_onshape",
    },
  ];

  const overViewContent = {
    header: "Cloud-based Design Tools - Shaping the Future of CAD",
    content:
      "Onshape stands as the forefront of cloud-based product development platforms, offering a comprehensive suite encompassing 3D CAD, PDM, collaboration, and analysis tools. With Onshape, seamless work across devices and browsers is a reality, ensuring convenient access and editing of your designs from any location. Onshape redefines CAD with its pure Cloud SaaS approach, eliminating the need for files and enabling real-time simultaneous engineering. It's a hassle-free solution that requires no system crashes, implementation efforts, or updates. Start your journey with Onshape in minutes and witness the future of CAD technology.",
    video: "https://www.youtube-nocookie.com/embed/8KWr3pTxna0?controls=0",
    id: "introduction_onshape",
  };

  const features = [
    {
      name: "Seamless Product Development, No IT Burden",
      content:
        "Effortless, Cloud-Based Product Development. No downloads or installations needed. Accessible via any modern web browser. Includes an integrated PDM system for smooth collaboration. Empowers design teams to prioritize creativity over IT concerns.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694523762/dykgjupidkluyc0dhwkl.png",
    },
    {
      name: "Accelerated time-to-market.",
      content:
        "Onshape expedites product development through its accessible, cloud-based platform compatible with any device. Seamless global collaboration enables teams to explore design alternatives simultaneously, eliminating data conflicts. This efficiency accelerates the product development cycle, ensuring a competitive edge in today's fast-paced market.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694523851/kdirzsoxtbqskdocyfry.png",
    },
  ];

  const framework = [
    {
      name: "Mitigate risks and safeguard intellectual property (IP).",
      content:
        "Onshape's database-driven architecture guarantees secure design data with precise access controls for every team member, minimizing the risk of unauthorized duplication and data breaches. Comprehensive version history facilitates effortless review and changes, fortifying the safeguarding of intellectual property.",
      reversed: true,
      img: "https://pdsvision.com/wp-content/uploads/2022/12/Onshape-explode.jpg",
    },
  ];

  return (
    <div>
      <Home {...home_content} />
      <ProductsNav naveles={naveles} logo={Logo} />
      <Overview {...overViewContent} />
      <Info
        title="Feature's of OnShape"
        features={features}
        id="platform_onshape"
      />
      <OnShapeFeatures features={onshapeFeatures} id="features" />
      <Info features={framework} id="framework_onshape" />
    </div>
  );
}
