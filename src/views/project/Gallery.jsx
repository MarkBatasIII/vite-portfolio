import { HiringGallery } from "./HiringGallery";
import { OHGallery } from "./OHGallery";
import { PayrollGallery } from "./PayrollGallery";

export function Gallery() {
    return (
        <>
            <div className='container-flex'>
                <HiringGallery />
            </div>
            <div className='container-flex'>
                <OHGallery />
            </div>
            <div className='container-flex'>
                <PayrollGallery />
            </div>
        </>
    );
}