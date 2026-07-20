"use client";

import { useSearchParams } from "next/navigation";
import RecordCreditForm from "@/features/credit-sales/components/RecordCreditForm";

export default function RecordCreditPage() {
    const searchParams = useSearchParams();
    const name = searchParams.get("name") || "Customer";
    const phone = searchParams.get("phone") || "";

    return (
        <RecordCreditForm
        customerName={name}
        customerPhone={phone}
        outstandingBalance="₦0.00"
        />
    );
}