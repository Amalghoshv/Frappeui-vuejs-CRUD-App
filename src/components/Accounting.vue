    <template>
    <div>
        <v-container>
        <div>
            <h1 class="m-2 mb-5 text-h5">Customer Ledger Summary</h1>
        </div>
        <div class="tables bg-white">
            <v-row>
            <v-col cols="2">
                <v-text-field
                class="custom-text-field"
                label="enfono"
                dense
                ></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-text-field
                type="date"
                class="custom-text-field"
                dense
                ></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-text-field></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-text-field></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-text-field></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-text-field></v-text-field>
            </v-col>
            </v-row>
            <v-row>
            <v-col cols="2">
                <v-text-field></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-text-field></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-text-field></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-text-field></v-text-field>
            </v-col>
            </v-row>
        </div>
        <div>
            <hr />
            <v-table density="compact" class="tables">
            <thead class="text-center">
                <tr>
                <th class="text-center">Sl</th>
                <th class="text-center">Customer</th>
                <th class="text-center">Opening Balance</th>
                <th class="text-center">Invoiced Amount</th>
                <th class="text-center">Paid Amount</th>
                <th class="text-center">Credit Note</th>
                <th class="text-center">Closing Balance</th>
                <th class="text-center">Currency</th>
                <th class="text-center">Territory</th>
                <th class="text-center">Group</th>
                </tr>
            </thead>
            <tbody v-if="itemssummary && itemssummary.length > 0" class="text-center">
                <tr v-for="(item, index) in itemssummary" :key="index">
                <td  >{{ index+1  }}</td>
                <td>{{ item.customer }}</td>
                <td>{{ item.openingbalance }}</td>
                <td>{{ item.invoicedamount }}</td>
                <td>{{ item.paid }}</td>
                <td>{{ item.credit }}</td>
                <td>{{ item.closingbalance }}</td>
                <td>{{ item.currency }}</td>
                <td>{{ item.territory }}</td>
                <td>{{ item.group }}</td>
                </tr>
            </tbody>
            </v-table>
        </div>

        <hr />

        <div class="m-2 text-h5 mb-3 mt-4">Income Report</div>

        <v-table density="compact" class="tables">
            <thead class="text-center">
            <tr>
                <th class="text-center">Sl</th>
                <th class="text-center">Property</th>
                <th class="text-center">Invoice No</th>
                <th class="text-center">Customer</th>
                <th class="text-center">Items</th>
                <th class="text-center">Due Date</th>
                <th class="text-center">INR</th>
            </tr>
            </thead>
            <tbody class="text-center" >
            <tr v-for="(item, index) in items" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.property }}</td>
                <td>{{ item.invoice }}</td>
                <td>{{ item.customer }}</td>
                <td>{{ item.items }}</td>
                <td>{{ item.due }}</td>
                <td>{{ item.amount }}</td>
            </tr>
            <tr v-if="total !== ''" class="footer">
        <td colspan="6" class="text-right font-weight-bold">Total:</td>
        <td class="font-weight-bold">{{ total }}</td>
      </tr>
            </tbody>
        </v-table>
        </v-container>
    </div>
    </template>
    <script>
    import axios from 'axios'
    export default {
    name: 'Accounting',
    data() {
        return {
        items: '',
        itemssummary: '',
        Data: [],
        total: '',
        }
    },
    mounted() {
        this.fetchReport()
        this.fetchSummary()
    },
    methods: {
        fetchReport() {
        axios
            .get(
            'https://propfi-erp.enfono.com/api/method/frappe.desk.query_report.run?report_name=Debtor Report',
            {
                headers: {
                Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
                },
            }
            )
            .then((response) => {
            console.log('response is', response.data.message)
            this.items = response.data.message.result.map((item) => ({
                invoice: item.invoice_no,
                customer: item.customer,
                property: item.property,
                items: item.items,
                due: item.due_date,
                amount: item.inr,
            }))
            this.total = this.items.reduce((total, item) => {
                if (!isNaN(item.amount)) {
                return total + item.amount
                } else {
                return total
                }
            }, 0)
            console.log('total is', this.total)
            })
            .catch((error) => {
            console.error('Error fetching data:', error)
            console.log('Error response:', error.response)
            console.log('Error message:', error.message)
            })
        },
        fetchSummary() {
        axios
            .get(
            'https://propfi-erp.enfono.com/api/method/frappe.desk.query_report.run?report_name=Customer Ledger Summary&filters={"from_date":"2023-03-01"}',
            {
                headers: {
                Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
                },
            }
            )
            .then((response) => {
            console.log('response is', response.data.message)
            this.itemssummary = response.data.message.result.map((item) => ({
                invoice: item.invoice_no,
                openingbalance: item.opening_balance,
                customer: item.party,
                invoicedamount: item.invoiced_amount,
                paid: item.paid_amount,
                closingbalance: item.closing_balance,
                currency: item.currency,
                territory: item.territory,
                group: item.customer_group,
                property: item.property,
                due: item.due_date,
                credit: item.return_amount,
            }))
            })
            .catch((error) => {
            console.error('Error fetching data:', error)
            console.log('Error response:', error.response)
            console.log('Error message:', error.message)
            })
        },
    },
    }
    </script>
    <style  scoped>
    .tables {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }
    .custom-text-field input {
    height: 30px; /* Adjust the height as per your requirement */
    font-size: 14px;
    }
    </style>