var client = '';
var idTicket = '';
var URLNS = '';
(function () {
   client = ZAFClient.init();
   client.invoke("resize", { width: "100%", height: "500px" });
   client.metadata().then(function(metadata) {
      URLNS=metadata.settings.urlNSapi;
   });
   getBody(client);
})();

async function getBody(client){
   var factibilidad = false;
   var bodyTable = '';
   var data = await client.get("ticket");
   console.log('data',data);
   idTicket = data.ticket.id;
   if(data.ticket.subject.includes('Prospecto Ventas')){
      factibilidad=true;
   }

   if(!factibilidad){
      client.invoke('hide');
      return;
   }
   // for(var e=0;e<data.ticket.comments.length;e++){
   //    var dataComment = data.ticket.comments[e].value;
   //    if(dataComment.includes('Respuesta de Factibilidad')){
   //       client.invoke('hide');
   //       return;
   //    }
   // }
   // if(data.ticket.comments.length>0){
   //    bodyTable=data.ticket.comments[data.ticket.comments.length-1].value;
   // }
   // var getisPPE = await client.get(['ticket.customField:custom_field_21795614510743']);
   // var isPPE = getisPPE['ticket.customField:custom_field_21795614510743']=='yes' ? true : false;
   // var formFactibilidad = data.ticket.form.id;
   // console.log('data',data);
   // console.log('isPPE',isPPE);
   // console.log('formFactibilidad',formFactibilidad);
   //
   // async function displayTicketTitle(bodyTable,isPPE,formFactibilidad) {
   //    const response = await client.get("ticket.subject");
   //    const title = response["ticket.subject"];
   //    const span = document.getElementById("ticket-name");
   //    //var htmlText = '<h1>'+title+'</h1><br />'
   //    var htmlText = '';
   //    htmlText+=bodyTable;
   //    var paramReply = '';
   //    if(formFactibilidad==21681178370455) { //FORM MO
   //       if(isPPE){
   //          paramReply='MOPPE';
   //       }else{
   //          paramReply='MO';
   //       }
   //    }else{
   //       if(isPPE){
   //          paramReply='FOPPE';
   //       }else{
   //          paramReply='FO';
   //       }
   //    }
   //    htmlText += '<br /><button class="button" style="font-size:14px" onclick="replyFactibility(\'' + paramReply + '\')">Enviar</button>'
   //    if(paramReply=='FO') {
   //       htmlText += '<br /><p>Costo por Proyecto</p><input type="number" id="_total" class="_total" name="total" min="0">'
   //    }
   //
   //
   //    span.innerHTML = htmlText;
   //    var table = document.getElementById("ticket-name").getElementsByTagName('table');
   //    var tabletr = document.getElementById("ticket-name").getElementsByTagName('tr');
   //    for(var r=0;r<tabletr.length;r++) {
   //
   //       tabletr[r].id = 'tr_' + r;
   //       var tableTd = document.getElementById("tr_" + r).getElementsByTagName('td');
   //       var tableTh = document.getElementById("tr_" + r).getElementsByTagName('th');
   //       table[table.length - 1].style.border = '0px';
   //       if(formFactibilidad==21681178370455) {
   //          table[table.length - 1].width = '800px';
   //          if(isPPE){
   //             table[table.length - 1].width = '1000px';
   //          }
   //       }else{
   //          table[table.length - 1].width = '650px';
   //          if(isPPE){
   //             table[table.length - 1].width = '1400px';
   //          }
   //       }
   //       table[table.length - 1].style.padding = '0';
   //       table[table.length - 1].style["font-size"] = '14px';
   //       table[table.length - 1].id = 'tablaFactibilidad';
   //
   //       var tamTH = tableTh.length;
   //       var tamTD = tableTd.length;
   //       for(var h=0;h<tamTH;h++){
   //          if(h==0 || h==1 || h==2){
   //             tableTh[h].style.border = '1px solid';
   //             tableTh[h].style.margin = '0';
   //             tableTh[h].style["border-color"] = 'black';
   //             tableTh[h].style['font-weight']='bold';
   //             continue;
   //          }else{
   //             tableTh[h].remove();
   //             h=h-1;
   //             tamTH=tamTH-1;
   //          }
   //       }
   //       for(var i=0;i<tamTD;i++){
   //          if(i==0 || i==1 || i==2){
   //             tableTd[i].style.border = '1px solid';
   //             tableTd[i].style.margin = '0';
   //             tableTd[i].style["border-color"] = 'black';
   //             continue;
   //          }else{
   //             tableTd[i].remove();
   //             i=i-1;
   //             tamTD=tamTD-1;
   //          }
   //       }
   //
   //       const approve = document.createElement("td");
   //       const reason = document.createElement("td");
   //       // if(formFactibilidad!=21681178370455){
   //       if(paramReply!='FO') {
   //          var km = document.createElement("td");
   //       }
   //
   //       const costo = document.createElement("td");
   //
   //       if(paramReply!='FO') {
   //          var renta = document.createElement("td");
   //          var canal = document.createElement("td");
   //          var tranci = document.createElement("td");
   //          var direc = document.createElement("td");
   //          var duct = document.createElement("td");
   //          var poste = document.createElement("td");
   //          var techRequiered = document.createElement("td");
   //          var nodesRequiered = document.createElement("td");
   //          var apRequiered = document.createElement("td");
   //          var drop = document.createElement("td");
   //          // const moSpeed = document.createElement("td");
   //          var techFact = document.createElement("td");
   //          var minCost = document.createElement("td");
   //          var moEquipment = document.createElement("td");
   //       }
   //
   //       // }
   //
   //
   //
   //       approve.style.border = '1px solid';
   //       approve.style.margin = '0';
   //       approve.style["border-color"] = 'black';
   //       approve.style['font-weight']='bold';
   //       reason.style.border = '1px solid';
   //       reason.style.margin = '0';
   //       reason.style["border-color"] = 'black';
   //       reason.style['font-weight']='bold';
   //       console.log('isPPE',isPPE);
   //       console.log('paramReply',paramReply);
   //       console.log('formFactibilidad',formFactibilidad);
   //       if(formFactibilidad!=21681178370455) {
   //          costo.style.border = '1px solid';
   //          costo.style.margin = '0';
   //          costo.style["border-color"] = 'black';
   //          costo.style['font-weight'] = 'bold';
   //          if(!isPPE && paramReply!='FO') {
   //             km.style.border = '1px solid';
   //             km.style.margin = '0';
   //             km.style["border-color"] = 'black';
   //             km.style['font-weight'] = 'bold';
   //
   //             renta.style.border = '1px solid';
   //             renta.style.margin = '0';
   //             renta.style["border-color"] = 'black';
   //             renta.style['font-weight'] = 'bold';
   //             canal.style.border = '1px solid';
   //             canal.style.margin = '0';
   //             canal.style["border-color"] = 'black';
   //             canal.style['font-weight'] = 'bold';
   //             tranci.style.border = '1px solid';
   //             tranci.style.margin = '0';
   //             tranci.style["border-color"] = 'black';
   //             tranci.style['font-weight'] = 'bold';
   //             direc.style.border = '1px solid';
   //             direc.style.margin = '0';
   //             direc.style["border-color"] = 'black';
   //             direc.style['font-weight'] = 'bold';
   //             duct.style.border = '1px solid';
   //             duct.style.margin = '0';
   //             duct.style["border-color"] = 'black';
   //             duct.style['font-weight'] = 'bold';
   //             poste.style.border = '1px solid';
   //             poste.style.margin = '0';
   //             poste.style["border-color"] = 'black';
   //             poste.style['font-weight'] = 'bold';
   //          }else{
   //             if(paramReply!='FO'){
   //                techRequiered.style.border = '1px solid';
   //                techRequiered.style.margin = '0';
   //                techRequiered.style["border-color"] = 'black';
   //                techRequiered.style['font-weight'] = 'bold';
   //                nodesRequiered.style.border = '1px solid';
   //                nodesRequiered.style.margin = '0';
   //                nodesRequiered.style["border-color"] = 'black';
   //                nodesRequiered.style['font-weight'] = 'bold';
   //                apRequiered.style.border = '1px solid';
   //                apRequiered.style.margin = '0';
   //                apRequiered.style["border-color"] = 'black';
   //                apRequiered.style['font-weight'] = 'bold';
   //                drop.style.border = '1px solid';
   //                drop.style.margin = '0';
   //                drop.style["border-color"] = 'black';
   //                drop.style['font-weight'] = 'bold';
   //                // moSpeed.style.border = '1px solid';
   //                // moSpeed.style.margin = '0';
   //                // moSpeed.style["border-color"] = 'black';
   //                // moSpeed.style['font-weight'] = 'bold';
   //                // techFact.style.border = '1px solid';
   //                // techFact.style.margin = '0';
   //                // techFact.style["border-color"] = 'black';
   //                // techFact.style['font-weight'] = 'bold';
   //                // minCost.style.border = '1px solid';
   //                // minCost.style.margin = '0';
   //                // minCost.style["border-color"] = 'black';
   //                // minCost.style['font-weight'] = 'bold';
   //             }
   //
   //
   //          }
   //       }else{
   //          techRequiered.style.border = '1px solid';
   //          techRequiered.style.margin = '0';
   //          techRequiered.style["border-color"] = 'black';
   //          techRequiered.style['font-weight'] = 'bold';
   //          moEquipment.style.border = '1px solid';
   //          moEquipment.style.margin = '0';
   //          moEquipment.style["border-color"] = 'black';
   //          moEquipment.style['font-weight'] = 'bold';
   //          if(isPPE) {
   //             nodesRequiered.style.border = '1px solid';
   //             nodesRequiered.style.margin = '0';
   //             nodesRequiered.style["border-color"] = 'black';
   //             nodesRequiered.style['font-weight'] = 'bold';
   //             // apRequiered.style.border = '1px solid';
   //             // apRequiered.style.margin = '0';
   //             // apRequiered.style["border-color"] = 'black';
   //             // apRequiered.style['font-weight'] = 'bold';
   //             techFact.style.border = '1px solid';
   //             techFact.style.margin = '0';
   //             techFact.style["border-color"] = 'black';
   //             techFact.style['font-weight'] = 'bold';
   //          }
   //       }
   //       if(r==0){
   //          var nodeApprove = document.createTextNode("Aprobar");
   //          var nodeReason = document.createTextNode("Comentario");
   //          if(formFactibilidad!=21681178370455) {
   //             if(!isPPE) {
   //                var costoInv = document.createTextNode("Inversión");
   //                if(paramReply!='FO') {
   //                   var kmBuild = document.createTextNode("KM a Construir");
   //                   var rentaHMensual = document.createTextNode("Renta Hilo Mensual");
   //                   var canalizado = document.createTextNode("Canalizado");
   //                   var transicion = document.createTextNode("Transición");
   //                   var direccional = document.createTextNode("Direccional");
   //                   var ducto = document.createTextNode("Ducto");
   //                   var postes = document.createTextNode("Postes");
   //                }
   //
   //             }else{
   //                var costoInv = document.createTextNode("Precio al cliente");
   //                var techRequieredtn = document.createTextNode("Requiere Tecnico");
   //                var nodesRequieredtn = document.createTextNode("Nodos");
   //                var apRequieredtn = document.createTextNode("Access Points");
   //                var droptn = document.createTextNode("Drop");
   //                // var moSpeedtn = document.createTextNode("Velocidad MO");
   //                // var techFacttn = document.createTextNode("Fact. Tecnica");
   //                // var minCosttn = document.createTextNode("Costo Minimo");
   //                var moEquipmenttn = document.createTextNode("Equipos");
   //             }
   //          }else{
   //             var techRequieredtn = document.createTextNode("Requiere Tecnico");
   //             var moEquipmenttn = document.createTextNode("Equipos");
   //             if(isPPE) {
   //                var techRequieredtn = document.createTextNode("Requiere Tecnico");
   //                var nodesRequieredtn = document.createTextNode("Nodos");
   //                // var apRequieredtn = document.createTextNode("AP");
   //                var techFacttn = document.createTextNode("Fact. Tecnica");
   //             }
   //          }
   //       }else{
   //          var values = [{text:'',value:''},{text:'Factible',value:1},{text:'No Factible',value:2}];
   //          var nodeApprove = document.createElement('select');
   //          nodeApprove.id = 'factible_'+r;
   //          values.forEach(comboValues =>{
   //             var option = document.createElement('option');
   //             option.innerHTML = comboValues.text;
   //             option.value = comboValues.value;
   //             nodeApprove.appendChild(option);
   //          });
   //
   //          var nodeReason = document.createElement("textarea");
   //          nodeReason.style.width = '100%';
   //          nodeReason.style.height = '100%';
   //          nodeReason.id = 'coment_'+r;
   //          if(formFactibilidad!=21681178370455) {
   //             var costoInv = document.createElement("input");
   //             costoInv.style.width = '100%';
   //             costoInv.style.height = '100%';
   //             costoInv.type = 'number';
   //             costoInv.id = 'costoInv_' + r;
   //             if(!isPPE && paramReply!='FO') {
   //                var kmBuild = document.createElement("input");
   //                kmBuild.style.width = '100%';
   //                kmBuild.style.height = '100%';
   //                kmBuild.type = 'number';
   //                kmBuild.id = 'kmBuild_' + r;
   //
   //                var rentaHMensual = document.createElement("input");
   //                rentaHMensual.style.width = '100%';
   //                rentaHMensual.style.height = '100%';
   //                rentaHMensual.type = 'number';
   //                rentaHMensual.id = 'rentaHMensual_' + r;
   //                var canalizado = document.createElement("input");
   //                canalizado.style.width = '100%';
   //                canalizado.style.height = '100%';
   //                canalizado.type = 'number';
   //                canalizado.id = 'canalizado_' + r;
   //                var transicion = document.createElement("input");
   //                transicion.style.width = '100%';
   //                transicion.style.height = '100%';
   //                transicion.type = 'number';
   //                transicion.id = 'transicion_' + r;
   //                var direccional = document.createElement("input");
   //                direccional.style.width = '100%';
   //                direccional.style.height = '100%';
   //                direccional.type = 'number';
   //                direccional.id = 'direccional_' + r;
   //                var ducto = document.createElement("input");
   //                ducto.style.width = '100%';
   //                ducto.style.height = '100%';
   //                ducto.type = 'number';
   //                ducto.id = 'ducto_' + r;
   //                var postes = document.createElement("input");
   //                postes.style.width = '100%';
   //                postes.style.height = '100%';
   //                postes.type = 'number';
   //                postes.id = 'postes_' + r;
   //
   //             }else{
   //                if(paramReply!='FO') {
   //                   var techRequieredtn = document.createElement("input");
   //                   techRequieredtn.style.width = '100%';
   //                   techRequieredtn.style.height = '100%';
   //                   techRequieredtn.type = 'checkbox';
   //                   techRequieredtn.id = 'techRequieredtn_' + r;
   //                   var nodesRequieredtn = document.createElement("input");
   //                   nodesRequieredtn.style.width = '100%';
   //                   nodesRequieredtn.style.height = '100%';
   //                   nodesRequieredtn.type = 'number';
   //                   nodesRequieredtn.id = 'nodesRequieredtn_' + r;
   //                   var apRequieredtn = document.createElement("input");
   //                   apRequieredtn.style.width = '100%';
   //                   apRequieredtn.style.height = '100%';
   //                   apRequieredtn.type = 'number';
   //                   apRequieredtn.id = 'apRequieredtn_' + r;
   //                   var droptn = document.createElement("input");
   //                   droptn.style.width = '100%';
   //                   droptn.style.height = '100%';
   //                   droptn.type = 'number';
   //                   droptn.id = 'droptn_' + r;
   //                   // var moSpeedtn = document.createElement("input");
   //                   // moSpeedtn.style.width = '100%';
   //                   // moSpeedtn.style.height = '100%';
   //                   // moSpeedtn.type = 'number';
   //                   // moSpeedtn.id = 'moSpeedtn_' + r;
   //                   // var techFacttn = document.createElement("input");
   //                   // techFacttn.style.width = '100%';
   //                   // techFacttn.style.height = '100%';
   //                   // techFacttn.type = 'checkbox';
   //                   // techFacttn.id = 'techFacttn_' + r;
   //                   // var minCosttn = document.createElement("input");
   //                   // minCosttn.style.width = '100%';
   //                   // minCosttn.style.height = '100%';
   //                   // minCosttn.type = 'number';
   //                   // minCosttn.id = 'minCosttn_' + r;
   //                }
   //
   //             }
   //          }else{
   //             var techRequieredtn = document.createElement("input");
   //             techRequieredtn.style.width = '100%';
   //             techRequieredtn.style.height = '100%';
   //             techRequieredtn.type = 'checkbox';
   //             techRequieredtn.id = 'techRequieredtn_' + r;
   //             var moEquipmenttn = document.createElement("textarea");
   //             moEquipmenttn.style.width = '100%';
   //             moEquipmenttn.style.height = '100%';
   //             moEquipmenttn.id = 'moEquipmenttn_' + r;
   //             if(isPPE) {
   //                var techFacttn = document.createElement("input");
   //                techFacttn.style.width = '100%';
   //                techFacttn.style.height = '100%';
   //                techFacttn.type = 'checkbox';
   //                techFacttn.id = 'techFacttn_' + r;
   //                var techRequieredtn = document.createElement("input");
   //                techRequieredtn.style.width = '100%';
   //                techRequieredtn.style.height = '100%';
   //                techRequieredtn.type = 'checkbox';
   //                techRequieredtn.id = 'techRequieredtn_' + r;
   //                var nodesRequieredtn = document.createElement("input");
   //                nodesRequieredtn.style.width = '100%';
   //                nodesRequieredtn.style.height = '100%';
   //                nodesRequieredtn.type = 'number';
   //                nodesRequieredtn.id = 'nodesRequieredtn_' + r;
   //                // var apRequieredtn = document.createElement("input");
   //                // apRequieredtn.style.width = '100%';
   //                // apRequieredtn.style.height = '100%';
   //                // apRequieredtn.type = 'number';
   //                // apRequieredtn.id = 'apRequieredtn_' + r;
   //                var droptn = document.createElement("input");
   //             }
   //          }
   //       }
   //       approve.appendChild(nodeApprove);
   //       tabletr[r].appendChild(approve);
   //       reason.appendChild(nodeReason);
   //       tabletr[r].appendChild(reason);
   //       if(formFactibilidad!=21681178370455) {
   //          costo.appendChild(costoInv);
   //          tabletr[r].appendChild(costo);
   //          if(!isPPE && paramReply!='FO') {
   //             km.appendChild(kmBuild);
   //             tabletr[r].appendChild(km);
   //
   //             renta.appendChild(rentaHMensual);
   //             tabletr[r].appendChild(renta);
   //             canal.appendChild(canalizado);
   //             tabletr[r].appendChild(canal);
   //             tranci.appendChild(transicion);
   //             tabletr[r].appendChild(tranci);
   //             direc.appendChild(direccional);
   //             tabletr[r].appendChild(direc);
   //             duct.appendChild(ducto);
   //             tabletr[r].appendChild(duct);
   //             poste.appendChild(postes);
   //             tabletr[r].appendChild(poste);
   //          }else{
   //             if(paramReply!='FO') {
   //                techRequiered.appendChild(techRequieredtn);
   //                tabletr[r].appendChild(techRequiered);
   //                nodesRequiered.appendChild(nodesRequieredtn);
   //                tabletr[r].appendChild(nodesRequiered);
   //                apRequiered.appendChild(apRequieredtn);
   //                tabletr[r].appendChild(apRequiered);
   //                drop.appendChild(droptn);
   //                tabletr[r].appendChild(drop);
   //                // moSpeed.appendChild(moSpeedtn);
   //                // tabletr[r].appendChild(moSpeed);
   //                // techFact.appendChild(techFacttn);
   //                // tabletr[r].appendChild(techFact);
   //                // minCost.appendChild(minCosttn);
   //                // tabletr[r].appendChild(minCost);
   //             }
   //
   //          }
   //       }else{
   //          if(!isPPE) {
   //             techRequiered.appendChild(techRequieredtn);
   //             tabletr[r].appendChild(techRequiered);
   //             moEquipment.appendChild(moEquipmenttn);
   //             tabletr[r].appendChild(moEquipment);
   //          }else{
   //             techRequiered.appendChild(techRequieredtn);
   //             tabletr[r].appendChild(techRequiered);
   //             moEquipment.appendChild(moEquipmenttn);
   //             tabletr[r].appendChild(moEquipment);
   //             techFact.appendChild(techFacttn);
   //             tabletr[r].appendChild(techFact);
   //             techRequiered.appendChild(techRequieredtn);
   //             tabletr[r].appendChild(techRequiered);
   //             nodesRequiered.appendChild(nodesRequieredtn);
   //             tabletr[r].appendChild(nodesRequiered);
   //             // apRequiered.appendChild(apRequieredtn);
   //             // tabletr[r].appendChild(apRequiered);
   //          }
   //       }
   //    }
   // }
   //
   // displayTicketTitle(bodyTable,isPPE,formFactibilidad);


}

function replyFactibility(paramReply) {

   console.log('paramReply',paramReply);
   var tabletr = document.getElementById("ticket-name").getElementsByTagName('tr');
   var arrayFactibilidad = new Array();
   var factibleMoFo = false;
   if(paramReply=='FO'){
      var costoProyectoNode = document.getElementById("_total");
      var costoProyecto = costoProyectoNode.value;
   }
   console.log('costoProyecto',costoProyecto);
   for(var r=0;r<tabletr.length;r++) {
      if(r==0){
         continue;
      }
      if(paramReply=='FO'){
         var objFactibilidad = {
            "oportunity":'',
            "line":'',
            "service":'',
            "costoProyecto":costoProyecto,
            "factible":{
               "text":'',
               "value":''
            },
            "comentario":'',
            // "kmBuild":'',
            "costoInv":'',
            // "rentaHMensual":'',
            // "canalizado":'',
            // "transicion":'',
            // "direccional":'',
            // "ducto":'',
            // "postes":'',
            "ticket":idTicket,
            "type":paramReply,
         }
      }else if(paramReply=='FOPPE'){
         var objFactibilidad = {
            "oportunity":'',
            "line":'',
            "service":'',
            "factible":{
               "text":'',
               "value":''
            },
            "comentario":'',
            "costoInv":'',
            "ticket":idTicket,
            "type":paramReply,
            "tecnicoRequerido":'',
            "nodosRequeridos":'',
            // "apRequeridos":'',
            "drop":'',
            // "moSpeed":'',
            "factTecnica":false,
            "costoMinimo":''
         }
      }else if(paramReply=='MOPPE'){
         var objFactibilidad = {
            "oportunity":'',
            "line":'',
            "service":'',
            "factible":{
               "text":'',
               "value":''
            },
            "comentario":'',
            "ticket":idTicket,
            "type":paramReply,
            "tecnicoRequerido":'',
            "nodosRequeridos":'',
            // "apRequeridos":'',
            // "drop":'',
            // "moSpeed":'',
            "factTecnica":false,
            "costoMinimo":'',
            "moEquipment":''
         }
      }else{
         var objFactibilidad = {
            "oportunity":'',
            "line":'',
            "service":'',
            "factible":{
               "text":'',
               "value":''
            },
            "comentario":'',
            "ticket":idTicket,
            "type":paramReply,
            "tecnicoRequerido":'',
            "moEquipment":''
         }
      }
      var tableTd = document.getElementById("tr_" + r).getElementsByTagName('td');
      var selected = document.getElementById("factible_" + r);
      var coment = document.getElementById("coment_" + r);
      if(paramReply=='FO' || paramReply=='FOPPE') {

         var costoInv = document.getElementById("costoInv_" + r);


         if(paramReply=='FOPPE'){
            var kmBuild = document.getElementById("kmBuild_" + r);
            var rentaHmensual = document.getElementById("rentaHMensual_" + r);
            var canalizado = document.getElementById("canalizado_" + r);
            var transicion = document.getElementById("transicion_" + r);
            var direccional = document.getElementById("direccional_" + r);
            var ducto = document.getElementById("ducto_" + r);
            var postes = document.getElementById("postes_" + r);
            var techRequieredtn = document.getElementById("techRequieredtn_" + r);
            var nodesRequieredtn = document.getElementById("nodesRequieredtn_" + r);
            var apRequieredtn = document.getElementById("apRequieredtn_" + r);
            var droptn = document.getElementById("droptn_" + r);
            // var moSpeedtn = document.getElementById("moSpeedtn_" + r);
            // var techFacttn = document.getElementById("techFacttn_" + r);
            // var minCosttn = document.getElementById("minCosttn_" + r);
         }
      }

      if(paramReply=='MO' || paramReply=='MOPPE') {
         var techRequieredtn = document.getElementById("techRequieredtn_" + r);
         // var moSpeedtn = document.getElementById("moSpeedtn_" + r);
         var moEquipment = document.getElementById("moEquipmenttn_" + r);

         if(paramReply=='MOPPE'){
            var nodesRequieredtn = document.getElementById("nodesRequieredtn_" + r);
            // var apRequieredtn = document.getElementById("apRequieredtn_" + r);
            var droptn = document.getElementById("droptn_" + r);
            var techFacttn = document.getElementById("techFacttn_" + r);
            var minCosttn = document.getElementById("minCosttn_" + r);
         }
      }

      var tamTD = tableTd.length;
      objFactibilidad.oportunity=tableTd[0].innerText;
      objFactibilidad.line=tableTd[1].innerText;
      objFactibilidad.service=tableTd[2].innerText;
      objFactibilidad.factible.text=selected.options[selected.selectedIndex].text;
      objFactibilidad.factible.value=selected.value;
      if(selected.value==1){
         factibleMoFo=true;
      }
      objFactibilidad.comentario=coment.value;
      if(paramReply=='FO') {
         // objFactibilidad.kmBuild = kmBuild.value;
         // objFactibilidad.rentaHMensual = rentaHmensual.value;
         objFactibilidad.costoInv = costoInv.value;

         // objFactibilidad.canalizado = canalizado.value;
         // objFactibilidad.transicion = transicion.value;
         // objFactibilidad.direccional = direccional.value;
         // objFactibilidad.ducto = ducto.value;
         // objFactibilidad.postes = postes.value;
      }
      if(paramReply=='MO') {
         objFactibilidad.tecnicoRequerido = techRequieredtn.checked;
         // objFactibilidad.moSpeed = moSpeedtn.value;
         objFactibilidad.moEquipment = moEquipment.value;
      }
      if(paramReply=='FOPPE') {
         objFactibilidad.costoInv = costoInv.value;
         objFactibilidad.tecnicoRequerido = techRequieredtn.checked;
         objFactibilidad.nodosRequeridos = nodesRequieredtn.value;
         objFactibilidad.apRequeridos = apRequieredtn.value;
         objFactibilidad.drop = droptn.value;
         // objFactibilidad.moSpeed = moSpeedtn.value;
         // objFactibilidad.factTecnica = techFacttn.checked;
         // objFactibilidad.costoMinimo = minCosttn.value;

      }
      if(paramReply=='MOPPE') {
         // objFactibilidad.costoInv = costoInv.value;
         objFactibilidad.tecnicoRequerido = techRequieredtn.checked;
         objFactibilidad.nodosRequeridos = nodesRequieredtn.value;
         // objFactibilidad.apRequeridos = apRequieredtn.value;
         //objFactibilidad.drop = droptn.value;
         // objFactibilidad.moSpeed = moSpeedtn.value;
         objFactibilidad.factTecnica = techFacttn.checked;
         //objFactibilidad.costoMinimo = minCosttn.value;
         objFactibilidad.moEquipment = moEquipment.value;
      }
      arrayFactibilidad.push(objFactibilidad);

   }

    async function getUser(arrayFactibilidad,factibleMoFo,paramReply){
       var table = document.getElementById("tablaFactibilidad");
       var currentUser = '';
      const optionsUser = {
         "url": '/api/v2/users/me',
         "type": "GET",
         "contentType": 'application/json',
      };

      // var idCOnecta = await client.get(['ticket.customField:custom_field_1500012965922']);

      // if(idCOnecta['ticket.customField:custom_field_1500012965922']){
         client.invoke('notify', 'Se está enviando la respuesta de factibilidad a Netsuite, espere un momento por favor.','notice',5000);
         client.invoke('hide');
         var userCurrent = await client.request(optionsUser);
         currentUser = userCurrent.user.id;
         var createResponse = responseHtml(arrayFactibilidad,paramReply);
         client.get("ticket").then(function (data) {
            if(URLNS===undefined || URLNS===''){
               // URLNS='https://7380925.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=566&deploy=1&compid=7380925&h=b5c218dc1003eb27740c';
               URLNS='https://7380925.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=748&deploy=1';
            }
            var factiblezendesk = '';
            if(factibleMoFo && (paramReply=='FO' || paramReply=='FOPPE')){
               factiblezendesk='positivo';
            }else if(factibleMoFo && (paramReply=='MO'|| paramReply=='MOPPE')){
               factiblezendesk='negativo';
            }else{
               factiblezendesk='no_factible';
            }
            const optionsNS = {
               "url": URLNS,
               "type": "PUT",
               "contentType": 'application/json',
               "data":JSON.stringify(arrayFactibilidad)
            };
            client.request(optionsNS).then(
                function(respuestaNS) {
                   if(respuestaNS){
                      var bodyNS = JSON.parse(respuestaNS);
                      if(bodyNS.success){
                         client.invoke('notify', 'Se ha enviado la respuesta de factibilidad a Netsuite','notice',{sticky: true});
                         var urlTicket = '/api/v2/tickets/'+data.ticket.id+'.json';
                         var jsonSend = {
                            "ticket": {
                               "custom_fields": [
                                  {
                                     "id": 5678696125463,
                                     "value": factiblezendesk
                                  }
                               ],
                               "comment": {
                                  "html_body": createResponse,
                                  "author_id": currentUser,
                                  "public":false },
                               "status": "solved"
                            }
                         }

                         const options = {
                            "url": urlTicket,
                            "type": "PUT",
                            "contentType": 'application/json',
                            "data":JSON.stringify(jsonSend)
                         };

                         client.request(options).then(
                             function(tickets) {
                             },
                             function(response) {
                                console.log(response);
                                client.invoke('notify', 'No se ha podido enviar la respuesta a Netsuite, intentelo nuevamente por favor.','error',{sticky: true});
                             }
                         );
                         //client.invoke('hide');
                      }else{
                         client.invoke('notify', 'No se ha podido enviar la respuesta a Netsuite','error',{sticky: true});
                      }
                   }
                },
                function(response) {
                   client.invoke('notify', response,'error',{sticky: true});
                }
            );
         });
      // }else{
      //    client.invoke('notify', 'Debe ingresar el valor del campo Conecta a para poder enviar la factibilidad.','error',4000);
      // }
   }

   getUser(arrayFactibilidad,factibleMoFo,paramReply);


}

function responseHtml(arrayFactibilidad,paramReply){
   var htmlText = '<p id="respuestaFactible">Respuesta de Factibilidad</p><br />';
   if(paramReply=='FO'){
      htmlText += '<p>Costo por Proyecto: '+arrayFactibilidad[0].costoProyecto+'</p><br />';
   }
   htmlText += '<table>';
   htmlText+='<tr>';

   htmlText+='<td>Oportunidad</td>';
   htmlText+='<td>Partida</td>';
   htmlText+='<td>Servicio</td>';
   htmlText+='<td>Aprobar</td>';
   htmlText+='<td>Comentario</td>';
   if(paramReply!='FO') {
      htmlText += '<td>KM a Construir</td>';
   }
   if(paramReply=='FOPPE'){
      htmlText+='<td>Precio al cliente</td>';
   }else{
      htmlText+='<td>Inversión</td>';
   }
   if(paramReply!='FO'){
      htmlText+='<td>Renta Hilo Mensual</td>';
      htmlText+='<td>Canalizado</td>';
      htmlText+='<td>Transición</td>';
      htmlText+='<td>Direccional</td>';
      htmlText+='<td>Ducto</td>';
      htmlText+='<td>Postes</td>';
   }


   htmlText+='</tr>';

   for(var i=0;i<arrayFactibilidad.length;i++){
      htmlText+='<tr>';

      htmlText+='<td>'+arrayFactibilidad[i].oportunity+'</td>';
      htmlText+='<td>'+arrayFactibilidad[i].line+'</td>';
      htmlText+='<td>'+arrayFactibilidad[i].service+'</td>';
      htmlText+='<td>'+arrayFactibilidad[i].factible.text+'</td>';
      htmlText+='<td>'+arrayFactibilidad[i].comentario+'</td>';
      if(paramReply!='FO'){
         htmlText+='<td>'+arrayFactibilidad[i].kmBuild+'</td>';
      }
      htmlText+='<td>'+arrayFactibilidad[i].costoInv+'</td>';
      if(paramReply!='FO'){
         htmlText+='<td>'+arrayFactibilidad[i].rentaHMensual+'</td>';
         htmlText+='<td>'+arrayFactibilidad[i].canalizado+'</td>';
         htmlText+='<td>'+arrayFactibilidad[i].transicion+'</td>';
         htmlText+='<td>'+arrayFactibilidad[i].direccional+'</td>';
         htmlText+='<td>'+arrayFactibilidad[i].ducto+'</td>';
         htmlText+='<td>'+arrayFactibilidad[i].postes+'</td>';
      }




      htmlText+='</tr>';
   }
   htmlText+='</table>';
   return htmlText;
}
