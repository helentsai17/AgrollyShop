
import stateData from '../../components/statesData'

function getState(){
    const StateData = { stateData }
    if (this.state.usercountry === "brazil") {

        axios.get("http://agrolly.tech/get_cities.php")
            .then(response => {
                // console.log(response.data)
                const states = response.data;
                this.setState({ states: states });
            })
            .catch((error) => {
                console.log("error come from resgister: " + error)
            })

        const brazilset = StateData.stateData.Brazil
        if (this.state.stateset !== brazilset) {
            this.setState({ stateset: brazilset })
            {this.getBrazilCity()}
        }


    } else if (this.state.usercountry === "mongolia") {

        const Mongoliaset = StateData.stateData.Mongolia
        if (this.state.stateset !== Mongoliaset) {
            this.setState({ stateset: Mongoliaset })
        }


    } else if (this.state.usercountry === "USA") {
        const USAset = StateData.stateData.USA
        if (this.state.stateset !== USAset) {
            this.setState({ stateset: USAset })
        }

    } else if (this.state.usercountry === "taiwan") {
        const TaiwanSet = StateData.stateData.Taiwan
        if (this.state.stateset !== TaiwanSet) {
            this.setState({ stateset: TaiwanSet })
        }
    }

}
export default getState