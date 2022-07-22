import {
  ArrowRightIcon,
  ChevronRightIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import type { Service } from "../interfaces/Service";

type ServiceCardProps = {
  service: Service;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <li className="col-span-1 bg-gray-50 rounded-lg shadow divide-y divide-gray-200">
      <div className="w-full p-6 space-x-6">
        <h3 className="text-gray-900 text-lg font-bold truncate">
          {service.name}
        </h3>
      </div>
      <div className="w-full py-6 px-10">
        <ul role="list" className="flex flex-col gap-2">
          {service.details.map((detail) => (
            <li key={detail} className="flex gap-1">
              <div>
                <ChevronRightIcon className="h-5 w-5" aria-hidden />
              </div>
              <span className="text-sm">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      {service.finePrint && (
        <div className="flex gap-1 text-gray-500 p-5">
          <div>
            <ExclamationCircleIcon className="h-5 w-5" aria-hidden />
          </div>
          <div className="flex flex-col gap-1">
            {service.finePrint.heading && (
              <span className="text-sm">{service.finePrint.heading}</span>
            )}
            <span className="text-xs">{service.finePrint.text}</span>
          </div>
        </div>
      )}
    </li>
  );
};

export default ServiceCard;
