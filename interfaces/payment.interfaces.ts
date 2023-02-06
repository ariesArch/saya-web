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
    methods: string[];
    order: number;
}

export interface PaymentResponse {
    value: string;
    type: "REDIRECT" | "QR";
    transaction_number: number;
    order_number: string;
    expired_date_time: string;
}

export interface CheckPromoResponse {
    amount: number;
    expired_date: string;
    id: number;
    limited_count: number;
    name: string;
    promo_code: string;
    start_date: string;
    type: string;
}

export interface PromotionCampaign {
    id: number;
    name: string;
    short_des: string;
    des: string;
    promo_code: string;
    link_campaign_subscription_plans: SubscriptionPlan[];
    limit: number;
    start_date: string;
    end_date: string;
}
