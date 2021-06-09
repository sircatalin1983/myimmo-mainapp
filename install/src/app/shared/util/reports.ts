export enum ReportTypeEnum {
    ReportType_Inventory = "Inventory",
    ReportType_RentingContract = "RentingContract",
    ReportType_SubRentingContract = "SubRentingContract",
    ReportType_End_RentingContract = "EndRentingContract",
}

export class Reports {
    static getDataInventory(contract, property, inventoryItems) {
        let inventoryData; inventoryData = new Object();

        inventoryData['id'] = contract && contract.id ? contract.id : ".....";
        inventoryData['today'] = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        inventoryData['specialclauses'] = contract && contract.specialclauses && contract.specialclauses.length > 0 ? contract.specialclauses : "....." +
            "........................................................................................................." +
            "........................................................................................................." +
            "........................................................................................................." +
            ".........................................................................................................";

        inventoryData['rentplace'] = new Object();

        inventoryData['rentplace']['address'] = new Object();

        inventoryData['rentplace']['address']['city'] = property && property.addressCity && property.addressCity.length > 0 ? property.addressCity : ".........................";
        inventoryData['rentplace']['address']['county'] = property && property.addressCounty && property.addressCounty.length > 0 ? property.addressCounty : ".........................";
        inventoryData['rentplace']['address']['street'] = property && property.addressStreet && property.addressStreet.length > 0 ? property.addressStreet : ".........................";
        inventoryData['rentplace']['address']['number'] = property && property.addressNumber && property.addressNumber.length > 0 ? property.addressNumber : ".....";
        inventoryData['rentplace']['address']['building'] = property && property.addressBuilding && property.addressBuilding.length > 0 ? property.addressBuilding : ".....";
        inventoryData['rentplace']['address']['stair'] = property && property.addressStair && property.addressStair.length > 0 ? property.addressStair : ".....";
        inventoryData['rentplace']['address']['floor'] = property && property.addressFloor && property.addressFloor.length > 0 ? property.addressFloor : ".....";
        inventoryData['rentplace']['address']['apartament'] = property && property.addressApartment && property.addressApartment.length > 0 ? property.addressApartment : ".....";

        inventoryData['inventory'] = new Array();

        if (inventoryItems && inventoryItems.length > 0) {
            for (let i = 0; i < inventoryItems.length; i++) {
                let inventoryItem; inventoryItem = new Object();

                inventoryItem['name'] = inventoryItems[i].Part ? inventoryItems[i].Part.name : "";
                inventoryItem['state'] = inventoryItems[i] ? inventoryItems[i].state : "";

                inventoryData['inventory'].push(inventoryItem);
            }
        } else {
            for (let i = 0; i < 60; i++) {
                let inventoryItem; inventoryItem = new Object();

                inventoryItem['name'] = "";
                inventoryItem['state'] = "";

                inventoryData['inventory'].push(inventoryItem);
            }
        }

        return inventoryData;
    }

    static getDataRentingContract(contract, property, owners, renters) {
        let ownerArray = owners ? owners[0]['Actors'] : new Array();
        let renterArray = renters ? renters[0]['Actors'] : new Array();

        let rentingContractData = new Object();

        rentingContractData['id'] = contract ? contract.id : ".....";
        rentingContractData['today'] = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        rentingContractData['specialclauses'] = contract && contract.specialclauses && contract.specialclauses.length > 0 ? contract.specialclauses : "....." +
            "........................................................................................................." +
            "........................................................................................................." +
            "........................................................................................................." +
            ".........................................................................................................";

        rentingContractData['rentplace'] = new Object();

        rentingContractData['rentplace']['rooms'] = property && property.rooms && property.rooms.length > 0 ? property.rooms : ".....";
        rentingContractData['rentplace']['squaremeters'] = property && property.squaremeters && property.squaremeters.length > 0 ? property.squaremeters : ".....";
        rentingContractData['rentplace']['state'] = property && property.state && property.state.length > 0 ? property.state : ".....";

        rentingContractData['rentplace']['address'] = new Object();

        rentingContractData['rentplace']['address']['city'] = property && property.addressCity && property.addressCity.length > 0 ? property.addressCity : ".........................";
        rentingContractData['rentplace']['address']['county'] = property && property.addressCounty && property.addressCounty.length > 0 ? property.addressCounty : ".........................";
        rentingContractData['rentplace']['address']['street'] = property && property.addressStreet && property.addressStreet.length > 0 ? property.addressStreet : ".........................";
        rentingContractData['rentplace']['address']['number'] = property && property.addressNumber && property.addressNumber.length > 0 ? property.addressNumber : ".....";
        rentingContractData['rentplace']['address']['building'] = property && property.addressBuilding && property.addressBuilding.length > 0 ? property.addressBuilding : ".....";
        rentingContractData['rentplace']['address']['stair'] = property && property.addressStair && property.addressStair.length > 0 ? property.addressStair : ".....";
        rentingContractData['rentplace']['address']['floor'] = property && property.addressFloor && property.addressFloor.length > 0 ? property.addressFloor : ".....";
        rentingContractData['rentplace']['address']['apartament'] = property && property.addressApartment && property.addressApartment.length > 0 ? property.addressApartment : ".....";

        rentingContractData['contract'] = new Object();

        rentingContractData['contract']['startdate'] = contract && contract.startDate ? new Date(contract.startDate).toJSON().slice(0, 10).replace(/-/g, '/') : "...............";
        rentingContractData['contract']['enddate'] = contract && contract.endDate ? new Date(contract.endDate).toJSON().slice(0, 10).replace(/-/g, '/') : "...............";
        rentingContractData['contract']['duration'] = contract && contract.duration ? contract.duration : ".....";
        rentingContractData['contract']['paymentdate'] = contract && contract.paymentDate ? contract.paymentDate : "...............";
        rentingContractData['contract']['paymenttype'] = contract && contract.paymentType ? contract.paymentType : "...............";
        rentingContractData['contract']['paymentlocation'] = contract && contract.paymentLocation && contract.paymentLocation.length > 0 ? contract.paymentLocation : ".........................";
        rentingContractData['contract']['rent'] = contract && contract.rent ? contract.rent : "...............";
        rentingContractData['contract']['rentletters'] = contract && contract.rentInLetters && contract.rentInLetters.length > 0 ? contract.rentInLetters : "...............";
        rentingContractData['contract']['rentcurrency'] = contract && contract.rentCurrency && contract.rentCurrency.length > 0 ? contract.rentCurrency : ".....";
        rentingContractData['contract']['upfront'] = contract && contract.upfrontPayment ? contract.upfrontPayment : "...............";
        rentingContractData['contract']['upfrontletters'] = contract && contract.upfrontPaymentLetters && contract.upfrontPaymentLetters.length > 0 ? contract.upfrontPaymentLetters : ".........................";
        rentingContractData['contract']['upfrontcurrency'] = contract && contract.upfrontPaymentCurrency && contract.upfrontPaymentCurrency.length > 0 ? contract.upfrontPaymentCurrency : ".....";
        rentingContractData['contract']['upfrontdetails'] = contract && contract.upfrontPaymentDetails && contract.upfrontPaymentDetails.length > 0 ? contract.upfrontPaymentDetails : ".........................";
        rentingContractData['contract']['warranty'] = contract && contract.warranty ? contract.warranty : "...............";
        rentingContractData['contract']['warrantyletters'] = contract && contract.warrantyLetters && contract.warrantyLetters.length > 0 ? contract.warrantyLetters : ".........................";
        rentingContractData['contract']['warrantycurrency'] = contract && contract.warrantyCurrency && contract.warrantyCurrency.length > 0 ? contract.warrantyCurrency : ".....";

        rentingContractData['owners'] = new Array();
        if (ownerArray && ownerArray.length > 0) {
            for (let i = 0; i < ownerArray.length; i++) {
                let ownerItem = new Object();

                ownerItem['isprivate'] = ownerArray[i] && ownerArray[i].actorDataIsCompany ? ownerArray[i].actorDataIsCompany : "false";
                ownerItem['firstname'] = ownerArray[i] && ownerArray[i].actorDataFirstName && ownerArray[i].actorDataFirstName.length > 0 ? ownerArray[i].actorDataFirstName : ".........................";
                ownerItem['middlename'] = ownerArray[i] && ownerArray[i].actorDataMiddleName && ownerArray[i].actorDataMiddleName.length > 0 ? ownerArray[i].actorDataMiddleName : ".........................";
                ownerItem['lastname'] = ownerArray[i] && ownerArray[i].actorDataLastName && ownerArray[i].actorDataLastName.length > 0 ? ownerArray[i].actorDataLastName : ".........................";

                ownerItem['address'] = new Object();

                ownerItem['address']['city'] = ownerArray[i] && ownerArray[i].actorDataAddressCity && ownerArray[i].actorDataAddressCity.length > 0 ? ownerArray[i].actorDataAddressCity : ".........................";
                ownerItem['address']['county'] = ownerArray[i] && ownerArray[i].actorDataAddressCounty && ownerArray[i].actorDataAddressCounty.length > 0 ? ownerArray[i].actorDataAddressCounty : ".........................";
                ownerItem['address']['country'] = ownerArray[i] && ownerArray[i].actorDataAddressCountry && ownerArray[i].actorDataAddressCountry.length > 0 ? ownerArray[i].actorDataAddressCountry : ".........................";
                ownerItem['address']['street'] = ownerArray[i] && ownerArray[i].actorDataAddressStreet && ownerArray[i].actorDataAddressStreet.length > 0 ? ownerArray[i].actorDataAddressStreet : ".........................";
                ownerItem['address']['number'] = ownerArray[i] && ownerArray[i].actorDataAddressNumber && ownerArray[i].actorDataAddressNumber.length > 0 ? ownerArray[i].actorDataAddressNumber : ".....";
                ownerItem['address']['building'] = ownerArray[i] && ownerArray[i].actorDataAddressBuilding && ownerArray[i].actorDataAddressBuilding.length > 0 ? ownerArray[i].actorDataAddressBuilding : ".....";
                ownerItem['address']['stair'] = ownerArray[i] && ownerArray[i].actorDataAddressStair && ownerArray[i].actorDataAddressStair.length > 0 ? ownerArray[i].actorDataAddressStair : ".....";
                ownerItem['address']['floor'] = ownerArray[i] && ownerArray[i].actorDataAddressFloor && ownerArray[i].actorDataAddressFloor.length > 0 ? ownerArray[i].actorDataAddressFloor : ".....";
                ownerItem['address']['apartament'] = ownerArray[i] && ownerArray[i].actorDataAddressApartment && ownerArray[i].actorDataAddressApartment.length > 0 ? ownerArray[i].actorDataAddressApartment : ".....";

                ownerItem['id'] = new Object();

                ownerItem['id']['type'] = ownerArray[i] && ownerArray[i].actorDataIdType && ownerArray[i].actorDataIdType.length > 0 ? ownerArray[i].actorDataIdType : ".....";
                ownerItem['id']['serie'] = ownerArray[i] && ownerArray[i].actorDataIdSerie && ownerArray[i].actorDataIdSerie.length > 0 ? ownerArray[i].actorDataIdSerie : ".....";
                ownerItem['id']['number'] = ownerArray[i] && ownerArray[i].actorDataIdNumber && ownerArray[i].actorDataIdNumber.length > 0 ? ownerArray[i].actorDataIdNumber : ".........................";
                ownerItem['id']['nationalid'] = ownerArray[i] && ownerArray[i].actorDataIdNationalId && ownerArray[i].actorDataIdNationalId.length > 0 ? ownerArray[i].actorDataIdNationalId : ".........................";
                ownerItem['id']['releasedby'] = ownerArray[i] && ownerArray[i].actorDataIdIssuedBy && ownerArray[i].actorDataIdIssuedBy.length > 0 ? ownerArray[i].actorDataIdIssuedBy : ".........................";

                rentingContractData['owners'].push(ownerItem);
            }
        } else {
            let ownerItem = new Object();

            ownerItem['isprivate'] = "false";
            ownerItem['firstname'] = ".........................";
            ownerItem['middlename'] = ".........................";
            ownerItem['lastname'] = ".........................";

            ownerItem['address'] = new Object();

            ownerItem['address']['city'] = ".........................";
            ownerItem['address']['county'] = ".........................";
            ownerItem['address']['country'] = ".........................";
            ownerItem['address']['street'] = ".........................";
            ownerItem['address']['number'] = ".....";
            ownerItem['address']['building'] = ".....";
            ownerItem['address']['stair'] = ".....";
            ownerItem['address']['floor'] = ".....";
            ownerItem['address']['apartament'] = ".....";

            ownerItem['id'] = new Object();

            ownerItem['id']['type'] = ".....";
            ownerItem['id']['serie'] = ".....";
            ownerItem['id']['number'] = ".........................";
            ownerItem['id']['nationalid'] = ".........................";
            ownerItem['id']['releasedby'] = ".........................";

            rentingContractData['owners'].push(ownerItem);
        }

        rentingContractData['renters'] = new Array();
        if (renterArray && renterArray.length > 0) {
            for (let i = 0; i < renterArray.length; i++) {
                let renterItem = new Object();

                renterItem['isprivate'] = renterArray[i] && renterArray[i].actorDataIsCompany && renterArray[i].actorDataIsCompany.length > 0 ? renterArray[i].actorDataIsCompany : "false";
                renterItem['firstname'] = renterArray[i] && renterArray[i].actorDataFirstName && renterArray[i].actorDataFirstName.length > 0 ? renterArray[i].actorDataFirstName : ".........................";
                renterItem['middlename'] = renterArray[i] && renterArray[i].actorDataMiddleName && renterArray[i].actorDataMiddleName.length > 0 ? renterArray[i].actorDataMiddleName : ".........................";
                renterItem['lastname'] = renterArray[i] && renterArray[i].actorDataLastName && renterArray[i].actorDataLastName.length > 0 ? renterArray[i].actorDataLastName : ".........................";

                renterItem['address'] = new Object();

                renterItem['address']['city'] = renterArray[i] && renterArray[i].actorDataAddressCity && renterArray[i].actorDataAddressCity.length > 0 ? renterArray[i].actorDataAddressCity : ".........................";
                renterItem['address']['county'] = renterArray[i] && renterArray[i].actorDataAddressCounty && renterArray[i].actorDataAddressCounty.length > 0 ? renterArray[i].actorDataAddressCounty : ".........................";
                renterItem['address']['country'] = renterArray[i] && renterArray[i].actorDataAddressCountry && renterArray[i].actorDataAddressCountry.length > 0 ? renterArray[i].actorDataAddressCountry : ".........................";
                renterItem['address']['street'] = renterArray[i] && renterArray[i].actorDataAddressStreet && renterArray[i].actorDataAddressStreet.length > 0 ? renterArray[i].actorDataAddressStreet : ".........................";
                renterItem['address']['number'] = renterArray[i] && renterArray[i].actorDataAddressNumber && renterArray[i].actorDataAddressNumber.length > 0 ? renterArray[i].actorDataAddressNumber : ".....";
                renterItem['address']['building'] = renterArray[i] && renterArray[i].actorDataAddressBuilding && renterArray[i].actorDataAddressBuilding.length > 0 ? renterArray[i].actorDataAddressBuilding : ".....";
                renterItem['address']['stair'] = renterArray[i] && renterArray[i].actorDataAddressStair && renterArray[i].actorDataAddressStair.length > 0 ? renterArray[i].actorDataAddressStair : ".....";
                renterItem['address']['floor'] = renterArray[i] && renterArray[i].actorDataAddressFloor && renterArray[i].actorDataAddressFloor.length > 0 ? renterArray[i].actorDataAddressFloor : ".....";
                renterItem['address']['apartament'] = renterArray[i] && renterArray[i].actorDataAddressApartment && renterArray[i].actorDataAddressApartment.length > 0 ? renterArray[i].actorDataAddressApartment : ".....";

                renterItem['id'] = new Object();

                renterItem['id']['type'] = renterArray[i] && renterArray[i].actorDataIdType && renterArray[i].actorDataIdType.length > 0 ? renterArray[i].actorDataIdType : ".....";
                renterItem['id']['serie'] = renterArray[i] && renterArray[i].actorDataIdSerie && renterArray[i].actorDataIdSerie.length > 0 ? renterArray[i].actorDataIdSerie : ".....";
                renterItem['id']['number'] = renterArray[i] && renterArray[i].actorDataIdNumber && renterArray[i].actorDataIdNumber.length > 0 ? renterArray[i].actorDataIdNumber : ".........................";
                renterItem['id']['nationalid'] = renterArray[i] && renterArray[i].actorDataIdNationalId && renterArray[i].actorDataIdNationalId.length > 0 ? renterArray[i].actorDataIdNationalId : ".........................";
                renterItem['id']['releasedby'] = renterArray[i] && renterArray[i].actorDataIdIssuedBy && renterArray[i].actorDataIdIssuedBy.length > 0 ? renterArray[i].actorDataIdIssuedBy : ".........................";

                rentingContractData['renters'].push(renterItem);
            }
        } else {
            let renterItem = new Object();

            renterItem['isprivate'] = "false";
            renterItem['firstname'] = ".........................";
            renterItem['middlename'] = ".........................";
            renterItem['lastname'] = ".........................";

            renterItem['address'] = new Object();

            renterItem['address']['city'] = ".........................";
            renterItem['address']['county'] = ".........................";
            renterItem['address']['country'] = ".........................";
            renterItem['address']['street'] = ".........................";
            renterItem['address']['number'] = ".....";
            renterItem['address']['building'] = ".....";
            renterItem['address']['stair'] = ".....";
            renterItem['address']['floor'] = ".....";
            renterItem['address']['apartament'] = ".....";

            renterItem['id'] = new Object();

            renterItem['id']['type'] = ".....";
            renterItem['id']['serie'] = ".....";
            renterItem['id']['number'] = ".........................";
            renterItem['id']['nationalid'] = ".........................";
            renterItem['id']['releasedby'] = ".........................";

            rentingContractData['renters'].push(renterItem);
        }

        return rentingContractData;
    }

    static getDataSubrentingContract(contract, property, roleOnContractItems) {
        let subrentingData; subrentingData = new Object();
        return subrentingData;
    }

    static getDataEndRentingContract(contract, property, roleOnContractItems) {
        let subrentingData; subrentingData = new Object();
        return subrentingData;
    }
}