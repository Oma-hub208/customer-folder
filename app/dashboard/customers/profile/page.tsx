"use client";

import { useSearchParams } from "next/navigation";
import CustomerProfile from "@/features/customers/components/CustomerProfile";

export default function CustomerProfilePage() {
    const searchParams = useSearchParams();
    const name = searchParams.get("name") || "Customer";
    const phone = searchParams.get("phone") || "";

    return (
        <CustomerProfile
        customerName={name}
        customerPhone={phone}
        outstandingBalance="₦0.00"
        totalCreditGiven="0"
        totalCreditAmount="₦0.00"
        />
    );
}