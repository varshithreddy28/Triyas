import React from 'react'
import Home from '../../components/Home_pdts/home'
import Logo from '../../assests/onshape_logo.png'
import onshapeBg from '../../assests/onshape_bg.jpg'
import ProductsNav from '../../components/prodyctsNav/productsnav'
import Overview from '../../components/Overview/overview'
import CreoImg from '../../assests/Triyas_Web.png'
import Info from '../../components/Products_Information/info'
import OnShapeFeatures from '../../components/OnShapeFeatures/onshapefeatures'
// 
import Data from '../../assests/onshape/datamanagement.svg'
import Team from '../../assests/onshape/team.svg'
import WorkFlow from '../../assests/onshape/workflow.svg'
import Parts from '../../assests/onshape/parts.svg'
import Assemblies from '../../assests/onshape/assembly.svg'
import Drawings from '../../assests/onshape/drawing.svg'
import Bill from '../../assests/onshape/bill.svg'
import Configurations from '../../assests/onshape/configurations.svg'
import Analiytics from '../../assests/onshape/anylatics.svg'
import Integrations from '../../assests/onshape/integration.svg'
import Support from '../../assests/onshape/support.svg'
import Security from '../../assests/onshape/security.svg'
import "./onshape.css"


export default function Onshape() {


    const onshapeFeatures = [
        {
            name: "Data Management",
            content: "Built-in version control and release management tools eliminate the need for a separate PDM system. Everybody works on the latest design data at all times. Every edit made by every user is captured and recorded and can be reversed at any time, providing unlimited undo/redo and a documented audit trail. Branching and merging enable multiple product ideas to be developed in parallel.",
            imageUrl: Data
        },
        {
            name: "Collaboration",
            content: "Edit designs simultaneously with other users and view changes in real time as they are made. Easily share design data with your team, your company, or your suppliers, setting granular permissions to view, edit, and export. Add comments and assign tasks to keep everyone on track. Follow mode facilitates interactive design reviews, presentations, and collaboration.",
            imageUrl: Team
        },
        {
            name: "Workflow",
            content: "Automate workflows to manage the release and revision control of parts, assemblies, drawings, and imported files. Create custom workflows specific to your own business processes. Users can design in parallel while waiting for a release candidate to be approved. Set up trigger points for notifications and emails.",
            imageUrl: WorkFlow
        },
        {
            name: "Parts",
            content: "Design complex solid and surface models using top-down or bottom-up methodologies. Capture design intent and inter-part relationships by designing parts together in a Part Studio. Further, extend Onshape’s robust feature set with custom features created using FeatureScript to automate complex or repetitive design tasks.",
            imageUrl: Parts
        },
        {
            name: "Assemblies",
            content: "Create highly structured and detailed assemblies with built-in standard hardware and parts linked from other Documents. Capture complex kinematic relationships with a single Mate. Design parts in context and manage updates predictably. Onshape’s unique database architecture eliminates the problem of broken links and missing files.",
            imageUrl: Assemblies
        },
        {
            name: "Drawings",
            content: "Create fully detailed drawings of parts and assemblies with dimensions, datums, surface finish and weld symbols, geometric tolerances, notes, tables, balloons, callouts, sheets, and fully configurable drawing properties. Supports import and export of DWG, DWT, and DXF file formats.",
            imageUrl: Drawings
        },
        {
            name: "Bill of Materials",
            content: "Configure and manage a Bill of Materials while simultaneously editing an assembly. Insert non-geometric items with quantities and predefined units. Add BOM tables to assembly drawings with intelligent balloon callouts. Real-time updates ensure the BOM is never out of sync with the assembly it reflects.",
            imageUrl: Bill
        },
        {
            name: "Configurations",
            content: "Build complex families of parts and assemblies with separate tables for each configuration option, dramatically reducing the number of rows and cells. Configuration variables enable infinite product variations. Each configuration can have its own part number and revision (release) history.",
            imageUrl: Configurations
        },
        {
            name: "Analytics",
            content: "Monitor project status with Activity, Release, Project, and User Dashboards. Review document access and conduct security reviews. Stay up-to-date with the user activity stream. Users can see and access reports according to Global Permissions.",
            imageUrl: Analiytics
        },
        {
            name: "Integrations",
            content: "Develop your own Onshape integrations via a robust REST API. Extend Onshape to meet your business and engineering needs with ERP, PLM, SSO, simulation, and CAM add-ons available in the Onshape App Store. New partners and integrations are being continuously added.",
            imageUrl: Integrations
        },
        {
            name: "Support",
            content: "Request support directly in the Onshape product. In-app feedback tools connect you directly with the Onshape support team. Self-paced tutorials and instructor-led training are available via our learning center. Interact with the Onshape Community and staff via the forum.",
            imageUrl: Support
        },
        {
            name: "Security",
            content: "Protect your design data from unauthorized use with role-based access control, AES-256 encryption, optional two-factor authentication, and comprehensive audit logs. Onshape is SOC 2 Type 2 compliant and is hosted on AWS. Payments with Onshape are PCI compliant.",
            imageUrl: Security
        },
    ];
    const home_content = {
        header: "Cloud-Native CAD & PDM",
        content: "Faster Product Design with Enhanced Collaboration and Cost Efficiency.",
        logo: Logo,
        back_img: 'https://www.onshape.com/global-assets/img/resource-center-heroes/zz-migrated-content-archive/1470x848/whats-new-in-the-onshape-app-store-05-18-17_1470x848.jpg'
    }

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
        content: "Onshape is the leading cloud-based product development platform, offering a comprehensive suite of 3D CAD, PDM, collaboration, and analysis tools. With Onshape, you can work seamlessly across devices and browsers, making it easy to access and edit your designs from anywhere. Onshape revolutionizes CAD with its pure Cloud SaaS approach, eliminating the need for files and enabling real- time simultaneous engineering.It's a hassle-free solution that requires no system crashes, implementation efforts, or updates. Get started with Onshape in minutes and experience the future of CAD technology.",
        video: "https://www.youtube-nocookie.com/embed/8KWr3pTxna0?controls=0",
        id: "introduction_onshape"
    }

    const features = [
        {
            name: "Seamless Product Development, No IT Burden",
            content: "Cloud-based, hassle-free product development. No downloads or installations required. Accessible from any modern web browser. Integrated PDM system for seamless collaboration. Empowers design teams to focus on creativity, not IT issues.",
            reversed: true,
            img: CreoImg
        },
        {
            name: "Accelerated time-to-market.",
            content: "Onshape enables rapid product development with its cloud-based platform accessible on any device. Global collaboration is seamless, allowing teams to experiment with design alternatives simultaneously without data conflicts. This efficiency accelerates the product development process, ensuring a competitive advantage in today's fast-paced market.",
            reversed: false,
            img: CreoImg
        },
    ]

    const framework = [
        {
            name: "Mitigate risks and safeguard intellectual property (IP).",
            content: "Onshape's database-driven architecture ensures secure design data with strict access controls for each team member, mitigating risks of unauthorized duplication and data breaches. Full version history allows for easy review and changes, enhancing protection of intellectual property.",
            reversed: true,
            img: "https://pdsvision.com/wp-content/uploads/2022/12/Onshape-explode.jpg"
        }
    ]



    return (
        <div>
            <Home {...home_content} />
            <ProductsNav naveles={naveles} logo={Logo} />
            <Overview {...overViewContent} />
            <Info title="Feature's of OnShape" features={features} id="platform_onshape" />
            <OnShapeFeatures features={onshapeFeatures} id="features" />
            <Info features={framework} id="framework_onshape" />
        </div>
    )
}
