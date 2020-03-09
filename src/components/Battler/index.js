import React from "react";
import "./style.css";

function Battler () {
    return (
        <div id="viewscreen">
            <div class="col-xs-3" id="playerstats">

                <table id="stattable">
                    <tr>
                    <td class="statsprite -health"></td>
                    <td class="statnum"><p id="health"></p></td>
                    <td class="statnum"><p id="ice"></p></td>
                    <td class="statsprite -ice"></td>
                    </tr>

                    <tr>
                    <td class="statsprite -mana"></td>
                    <td class="statnum"><p id="mana"></p></td>
                    <td class="statnum"><p id="fire"></p></td>
                    <td class="statsprite -fire"></td>
                    </tr>
                    <tr>
                    <td class="statsprite -damage"></td>
                    <td class="statnum"><p id="damage"></p></td>
                    <td class="statnum"><p id="storm"></p></td>
                    <td class="statsprite -storm"></td>
                    </tr>
                    <tr>
                    <td class="statsprite -dodge"></td>
                    <td class="statnum"><p id="dodge"></p></td>
                    <td class="statnum"><p id="shadow"></p></td>
                    <td class="statsprite -shadow"></td>
                    </tr>
                    <tr>
                    <td class="statsprite -critical"></td>
                    <td class="statnum"><p id="critical"></p></td>
                    <td class="statnum"><p id="nature"></p></td>
                    <td class="statsprite -nature"></td>
                    </tr>
                    <tr>
                    <td class="statsprite -magicpow"></td>
                    <td class="statnum"><p id="magicpow"></p></td>
                    <td class="statnum"><p id="blood"></p></td>
                    <td class="statsprite -blood"></td>
                    </tr>
                    <tr>
                    <td class="statsprite -healpow"></td>
                    <td class="statnum"><p id="healpow"></p></td>
                    <td class="statnum"><p id="lifesteal"></p></td>
                    <td class="statsprite -lifesteal"></td>
                    </tr>
                </table>


        </div>
        </div>
    )

}

export default Battler