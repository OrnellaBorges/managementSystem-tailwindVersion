import type { LeaveRequest } from "../../types/LeaveRequestType";
//import "./ManagerStyle.css";
import { Link } from "react-router-dom";

type ManagerPageProps = {
  requests: LeaveRequest[];
  updateId: React.Dispatch<React.SetStateAction<number | null>>;
};

export function ManagerPage({ requests, updateId }: ManagerPageProps) {
  const cellPadding = "py-2 px-4";
  return (
    <main className="w-full">
      <div className="font-poppins flex flex-wrap gap-6 mt-6 w-full text-dark border-2 ">
        <div className="rounded-lg bg-light p-6 overflow-x-auto mx-auto w-full border -2 border-cyan-300">
          <div className="head flex items-center gap-4 mb-6 border -2 w-full border-cyan-300">
            <h3 className="title-level3 text-2xl font-semibold">
              Leaves Orders
            </h3>
          </div>
          <table className="w-full border -2 border-cyan-300">
            <thead>
              <tr className="text-left">
                <th className={cellPadding}>Employee</th>
                <th className={cellPadding}>Start Leave</th>
                <th className={cellPadding}>End Leave</th>
                <th className={cellPadding}>Status</th>
                <th className={cellPadding}>Details</th>
              </tr>
            </thead>
            <tbody>
              {requests.length ? (
                requests.map((request, index) => (
                  <tr
                    key={`${request.employeeName}-${index}`}
                    className="order flex-grow flex-shrink-0 w-500 hover:bg-gray-200"
                  >
                    <td className={cellPadding}>{request.employeeName}</td>
                    <td className={cellPadding}>{request.startLeavePeriod}</td>
                    <td className={cellPadding}>{request.endLeavePeriod}</td>
                    <td className={cellPadding}>
                      <span
                        className={`text-sm font-semibold rounded-full px-4 ${
                          request.status.toLowerCase() === "approved"
                            ? "bg-blue-500 text-white"
                            : request.status.toLowerCase() === "pending"
                            ? "bg-yellow-500 text-black"
                            : request.status.toLowerCase() === "rejected"
                            ? "bg-orange-500 text-black"
                            : ""
                        }`}
                      >
                        {request.status}
                      </span>
                    </td>
                    <td className={cellPadding}>
                      <Link
                        onClick={() => updateId(index)}
                        to="/detail-request"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded- transition duration-300 ease-in-out"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="no-request-message py-2 px-4" colSpan={5}>
                    No requests yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
