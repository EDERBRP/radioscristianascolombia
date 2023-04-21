import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

                {
            name:"Su Presencia",
            artist: "Music",
            cover: "https://dab-radios.org/admin_panel_crisradiocolombia/uploads/radios/radio_81399_Su Presencia.png",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "http://supresenciaradio.out.airtime.pro:8000/supresenciaradio_a",
            active: true,
        },
        {
            name:"Cadena Radial Vida - Pereira 1120 AM",
            artist: "Music",
            cover: "https://dab-radios.org/admin_panel_crisradiocolombia/uploads/radios/radio_26897_Cadena Radial Vida - Pereira 1120 AM.png",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://26273.live.streamtheworld.com/VIDA_BOGOTA_SC?dist=onlineradiobox",
            active: false,
        },
        {
            name:"Radio Cristiana Caminando Con Dios",
            artist: "Music",
            cover: "https://dab-radios.org/admin_panel_crisradiocolombia/uploads/radios/radio_90826_Radio Cristiana Caminando Con Dios.png",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://stream-11.zeno.fm/yyday44d508uv?zs=",
            active: false,
        },
        {
            name:"Rock 'N' Roll Oldies Radio",
            artist: "Kids",
            cover: "http://rock-and-roll.dab-radios.org/ro/wp-content/uploads/2022/11/Rock-N-Roll-Oldies-Radio.png",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://ais-edge51-live365-dal02.cdnstream.com/a63650",
            active: false,
        },
    ];
}

export default chillHop;
