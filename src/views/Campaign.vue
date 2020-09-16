<template>
    <div id="form">
        <b-field label="Name">
            <b-input
                maxlength="100"
                v-model="campaign.Name">
            </b-input>
        </b-field>
        <b-field label="Subject">
            <b-input
                maxlength="150"
                v-model="campaign.Subject">
            </b-input>
        </b-field>
        <b-field label="Content">
            <b-input
                maxlength="500"
                v-model="campaign.Content"
                type="textarea">
            </b-input>
        </b-field>
        <b-field label="Recipients List">
            <b-select v-model="campaign.RecipientsListId" placeholder="Select a list">
                <option v-for="(list, index) in recipientsLists" :key="index"  :value="list.ID">{{ list.Name }}</option>
            </b-select>
        </b-field>
        <!-- <b-field label="Sending date">
            <b-datetimepicker
                rounded
                placeholder="Click to select..."
                icon="calendar-today"
                :datepicker="{ showWeekNumber }"
                :timepicker="{ enableSeconds, hourFormat: format }"
                horizontal-time-picker>
            </b-datetimepicker>
        </b-field> -->
        <div class="buttons">
        <b-button @click="editCampaign" type="is-info">Save changes</b-button>
        <b-button @click="isComponentModalActive = true" type="is-danger">Delete</b-button>

        <b-modal :active.sync="isComponentModalActive"
                 has-modal-card
                 trap-focus
                 :destroy-on-hide="false"
                 aria-role="dialog"
                 aria-modal>
                <div action="">
                    <div class="modal-card" style="width: auto">
                        <header class="modal-card-head">
                            <p class="modal-card-title">Voulez vous vraiment supprimer cette campagne ?</p>
                        </header>
                        <footer class="modal-card-foot">
                            <button @click="deleteCampaign" class="button is-danger">Delete</button>
                            <button class="button" type="button" @click="isComponentModalActive = false">Close</button>
                        </footer>
                    </div>
                </div>
        </b-modal>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            id: this.$route.params.id,
            isComponentModalActive: false,
            campaign: {
                RecipientsListId: 0
            },
            recipientsLists: [
                {
                    id: 1,
                    name: "Liste numero 1"
                },
                {
                    id: 2,
                    name: "Liste numero 2"
                },
                {
                    id: 3,
                    name: "Liste numero 3"
                }
            ]
        }
    },
    methods: {
        editCampaign: async function() {
            try {
                const response = await axios.put("http://localhost:8081/campaigns/"+this.id, {...this.campaign}, {
                    headers: {
                        "Authorization": localStorage.getItem('token')
                    }
                })
                response.status == 200 ? this.success("Changes saved!") : this.error()
            } catch (err) {
                console.error(err)
                this.error("An error occured.")
            }
        },
        deleteCampaign: async function() {
            this.isComponentModalActive = false
            try {
                const response = await axios.delete("http://localhost:8081/campaigns/"+this.id,{
                    headers: {
                        "Authorization": localStorage.getItem('token')
                    }
                })
                response.status == 200 ? this.success("Campaign deleted!") : this.error()

                setTimeout(() => {
                    this.$router.push("/")
                }, 500);
            } catch (err) {
                console.error(err)
                this.error("Couldn't delete.")
            }
        },
        success(message) {
            this.$buefy.toast.open({
                message: message,
                type: 'is-success'
            })
        },
        error(err) {
            const message = err != undefined ? err : 'Unable to make changes.'
            this.$buefy.toast.open({
                message: message,
                type: 'is-danger'
            })
        }
    },
    async mounted() {
        const campaignResponse = await axios.get("http://localhost:8081/campaigns/"+this.id,{
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
        this.campaign = campaignResponse.data
        const groupsResponse = await axios.get("http://localhost:8081/organisms/" + localStorage.getItem("organismId") + "/groups", 
        {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })

        this.recipientsLists = groupsResponse.data
    }
}
</script>


<style lang="scss" scoped>
#form {
  width: 50vw;
  margin-left: 25vw;
}
</style>