export interface SubscriptionPlan {
    id: number;
    name: string;
    price: number;
    month: number;
    final_price: number;
    has_promotion: number;
    is_percentage: boolean;
    promotion_title: string;
    promotion_price: number;
    is_popular: boolean;
}

export interface PaymentProvider {
    image_url: string;
    thumb_url: string;
    provider: string;
    type: string;
    methods: "PIN" | "QR";
    order: number;
}
