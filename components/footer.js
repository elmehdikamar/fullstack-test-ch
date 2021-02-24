import FooterLink from "./footer_link";

export default function Footer(props) {
    return (
        <div className={`${props.className ?? ''} bg-white col-span-5 px-5 py-7 grid grid-cols-4 text-gray-900`}>
            <div className="flex flex-col space-y-2 text-sm col-span-2 pr-3">
                <h1 className="text-lg font-semibold">About Us</h1>
                <p className="text-gray-600">We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.</p>
                <p className="text-gray-600">All copyrights reserved © 2021 - Health Explore</p>
            </div>
            <div className="flex flex-col space-y-2 text-sm">
                <h1 className="text-lg font-semibold">Sitemap</h1>
                <FooterLink title="Nurses" />
                <FooterLink title="Employers" />
                <FooterLink title="Social networking" />
                <FooterLink title="Jobs" />
            </div>
            <div className="flex flex-col space-y-2 text-sm">
                <h1 className="text-lg font-semibold">Privacy</h1>
                <FooterLink title="Terms of use" />
                <FooterLink title="Privacy policy" />
                <FooterLink title="Cookie policy" />
            </div>
        </div>
    );
}