import { getTickets } from "../actions/ticket.actions";
import Link from "next/link";
import { getPriorityClass } from "../utils/ui";


const TicketsPage = async () => {

  const tickets = await getTickets();
  console.log(tickets);

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        Support Tickets
      </h1>

      { tickets.length === 0 ? (
        <p className="text-center text-gray-600">
          No Tickets Yet
        </p>
      ) : (
        <div className="space-y-4 max-w-3xl mx-auto">
          
          { tickets.map ((ticket) => (
            <div key={ticket.id} className="flex justify-between items-center bg-white
             rounded-lg shadow border border-gray-200 p-6">

                {/* Left Side */}
                <div>
                  <div className="text-xl font-semibold text-blue-600">
                    {ticket.subject}
                  </div>
                </div>
                {/* Right Side */}
                <div className="text-right space-y-2">
                  <div className="text-sm text-gray-500">
                    Priority: <span className={ getPriorityClass(ticket.priority) }>
                      {ticket.priority}
                    </span>
                  </div>
                  <Link href={`/tickets/${ticket.id}`} className="
                  inline-block mt-2 bg-blue-600 text-white text-sm px-3 p-1 
                  tounded hover:bg-blue-700 transition text-center">
                    View Ticket
                  </Link>
                </div>

             </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TicketsPage
