import { clinicInfo } from "../data/clinicInfo";

export default function Footer() {
  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
      <div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 md:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full">
                <img
                  src="/images/logo-2.jpg"
                  alt="서면한의원 로고"
                  className="h-11 w-13 object-cover "
                />
              </div>
              <span
                className="self-center text-2xl font-semibold font-nanum"
                style={{ color: "#30588C" }}
              >
                {clinicInfo.name}
              </span>
            </a>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            대표원장: 김경진
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            사업자등록번호: #######
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            {clinicInfo.contact.address}, {clinicInfo.contact.addressDetail}
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            {clinicInfo.contact.phoneDisplay}
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>©2025 All rights reserved</span>
            <a rel="noopener noreferrer" href="#">
              <span>Privacy policy</span>
            </a>
            <a rel="noopener noreferrer" href="#">
              <span>Terms of service</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
