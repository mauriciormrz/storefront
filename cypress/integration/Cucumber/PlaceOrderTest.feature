Feature: Place an order
    As a YL customer,
    I want to add some items to the shopping cart,
    So I can place a one-time order.

    Background:
        Given I am at the Login page
        And I log in to the Storefront with user "5010"  and password "Password1"

    Scenario Outline: Place an order using only CC, ACH or PayPal
        When I add the item to the shopping cart
            | sku  | item                  | quantity | price | pv   |
            | 3500 | Basil Essential Oil   | 2        | 26.50 | 26.5 |
            | 5178 | Lip Balm - Grapefruit | 3        | 4.50  | 4.5  |
        #| 5203 | Lavender Lip Balm      | 1        | 4.25  | 4.25  |
        #| 4710 | Ningxia Red Combo Pack | 3        | 158.0 | 158.0 |
        #| 3419 | RutaVaLa Essential Oil | 1        | 33.75 | 33.75 |


        And I fill the checkout form with "<shipping_method>" and "<payment_method>"
        Then I submit the order with donation "<donation>"
        And I should see the order confirmation "THANK YOU FOR SHOPPING YOUNG LIVING."

        Examples:
            | shipping_method            | payment_method | donation |
            | Lehi, UT Will Call Pick-up | PayPal         | No       |
            | Expedited                  | Credit Card    | No       |
            | Standard                   | ACH            | Yes      |



#1056463
#Users LP
#4050735
#16105084
#4347583
#13302611
#25030913
#2424091
#3093650
#3583685

