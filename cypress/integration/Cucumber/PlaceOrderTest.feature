Feature: Place an order
    As a YL customer,
    I want to add some items to the shopping cart,
    So I can place a one-time order.

    Background:
        Given I am at the Login page
        And I log in to the Storefront with user "5010"  and password "Password1"

    Scenario Outline: Place an order using only CC, ACH or PayPal
        When I add the item to the shopping cart
            | sku  | item                | quantity | price | pv   |
            | 3500 | Basil Essential Oil | 3        | 26.50 | 26.5 |
        #| 3419 | RutaVaLa Essential Oil | 2        | 33.75 | 33.75 |
        #| 5203 | Lavender Lip Balm      | 1        | 4.25  | 4.25  | Revisar: Maximun purchase quantity limit for this item is 2
        #| 5178 | Lip Balm - Grapefruit  | 2        | 4.50  | 4.5   | Mejora: cuando producto no existe
        #| 4710 | Ningxia Red Combo Pack | 3        | 158.0 | 158.0 | Revisar: Inventary no available

        And I checkout the order with donation "<donation>"
        Then I fill the checkout form with "<shipping_method>" and "<payment_method>"
        #And I should see the order confirmation "THANK YOU FOR SHOPPING YOUNG LIVING."

        Examples:
            | shipping_method | payment_method | donation |
            | Economy         | Credit Card    | Yes      |
            | Standard        | ACH            | No       |
#| Expedited                  | PayPal         | Yes      |
#| Spanish Fork, UT Will Call | ACH            | No       |
#| Lehi, UT Will Call         | ACH            | Yes      |






