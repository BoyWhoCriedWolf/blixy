import { Button, Paper } from "@mui/material";
import LoaderContainer from "components/loading/loader-container";
import { useState } from "react";
import GeneralLedgerAccountsList from "sections/general-ledger-accounts/list";
import generalLedgerAccountService from "services/general.ledger.account.service";
import {
  GeneralLedgerAccount,
  GeneralLedgerAccountType,
} from "services/types/general.ledger.account.types";

const AccountingChartPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    const data: Array<GeneralLedgerAccount> = [
      {
        code: "60000",
        type: GeneralLedgerAccountType.Revenue,
        description: "Inkopen artikelgroep 1",
      },
      {
        code: "60001",
        type: GeneralLedgerAccountType.Revenue,
        description: "Inkopen schoenen",
      },
      {
        code: "60200",
        type: GeneralLedgerAccountType.Revenue,
        description: "Inkopen van diensten",
      },
      {
        code: "60300",
        type: GeneralLedgerAccountType.Revenue,
        description: "Uitbesteed werk",
      },
      {
        code: "60400",
        type: GeneralLedgerAccountType.Revenue,
        description: "Inkopen van handelsgoederen",
      },
      {
        code: "60900",
        type: GeneralLedgerAccountType.Revenue,
        description: "Voorraadwijzigingen",
      },
      {
        code: "60999",
        type: GeneralLedgerAccountType.Revenue,
        description: "Overige inkopen",
      },
      {
        code: "70000",
        type: GeneralLedgerAccountType.Revenue,
        description: "Mutatie voorraad gereed product",
      },
      {
        code: "80000",
        type: GeneralLedgerAccountType.Revenue,
        description: "Omzet",
      },
      {
        code: "80999",
        type: GeneralLedgerAccountType.Revenue,
        description: "Overige omzet",
      },
      {
        code: "81000",
        type: GeneralLedgerAccountType.Revenue,
        description: "Verkoopkortingen",
      },
      {
        code: "81500",
        type: GeneralLedgerAccountType.Revenue,
        description: "Doorbelaste kosten",
      },
      {
        code: "82000",
        type: GeneralLedgerAccountType.Revenue,
        description: "Huurinkomsten",
      },

      {
        code: "40000",
        type: GeneralLedgerAccountType.Costs,
        description: "Salarissen",
      },
      {
        code: "40075",
        type: GeneralLedgerAccountType.Costs,
        description: "Bijdrage spaarloon",
      },
      {
        code: "40100",
        type: GeneralLedgerAccountType.Costs,
        description: "Premies en sociale lasten",
      },
      {
        code: "40105",
        type: GeneralLedgerAccountType.Costs,
        description: "Afdrachtsvermindering",
      },
      {
        code: "40110",
        type: GeneralLedgerAccountType.Costs,
        description: "Ziekengeld verzekering",
      },
      {
        code: "40125",
        type: GeneralLedgerAccountType.Costs,
        description: "Eindheffing loonheffing",
      },
      {
        code: "40130",
        type: GeneralLedgerAccountType.Costs,
        description: "Storting eigen pensioenvoorziening",
      },
      {
        code: "40150",
        type: GeneralLedgerAccountType.Costs,
        description: "Pensioenen",
      },
      {
        code: "40200",
        type: GeneralLedgerAccountType.Costs,
        description: "Reiskostenvergoedingen",
      },
      {
        code: "40300",
        type: GeneralLedgerAccountType.Costs,
        description: "Opleidingskosten",
      },
      {
        code: "40400",
        type: GeneralLedgerAccountType.Costs,
        description: "Onkostenvergoedingen",
      },
      {
        code: "40450",
        type: GeneralLedgerAccountType.Costs,
        description: "Overige vergoedingen",
      },
      {
        code: "40500",
        type: GeneralLedgerAccountType.Costs,
        description: "Uitzendkrachten",
      },
      {
        code: "40510",
        type: GeneralLedgerAccountType.Costs,
        description: "Management fees",
      },
      {
        code: "40520",
        type: GeneralLedgerAccountType.Costs,
        description: "Uitbesteed werk",
      },
      {
        code: "40600",
        type: GeneralLedgerAccountType.Costs,
        description: "Kantine en consumptie",
      },
      {
        code: "40650",
        type: GeneralLedgerAccountType.Costs,
        description: "Personeelsuitjes",
      },
      {
        code: "40700",
        type: GeneralLedgerAccountType.Costs,
        description: "Kosten van werving en selectie",
      },
      {
        code: "40750",
        type: GeneralLedgerAccountType.Costs,
        description: "Arbokosten",
      },
      {
        code: "40800",
        type: GeneralLedgerAccountType.Costs,
        description: "Uitkeringen ziekengeld",
      },
      {
        code: "40900",
        type: GeneralLedgerAccountType.Costs,
        description: "Werkkleding",
      },
      {
        code: "40950",
        type: GeneralLedgerAccountType.Costs,
        description: "Vakantiegeld",
      },
      {
        code: "40960",
        type: GeneralLedgerAccountType.Costs,
        description: "Vakantiedagen",
      },
      {
        code: "40961",
        type: GeneralLedgerAccountType.Costs,
        description: "Kort verzuim",
      },
      {
        code: "40962",
        type: GeneralLedgerAccountType.Costs,
        description: "Feestdagen",
      },
      {
        code: "40970",
        type: GeneralLedgerAccountType.Costs,
        description: "WKR kosten",
      },
      {
        code: "40980",
        type: GeneralLedgerAccountType.Costs,
        description: "Overboekingsrekening personeelskosten",
      },
      {
        code: "40990",
        type: GeneralLedgerAccountType.Costs,
        description: "Overige personeelskosten",
      },
      {
        code: "41000",
        type: GeneralLedgerAccountType.Costs,
        description: "Huur bedrijfspand",
      },
      {
        code: "41100",
        type: GeneralLedgerAccountType.Costs,
        description: "Servicekosten",
      },
      {
        code: "41200",
        type: GeneralLedgerAccountType.Costs,
        description: "Gas, water & elektra",
      },
      {
        code: "41300",
        type: GeneralLedgerAccountType.Costs,
        description: "Onderhoud pand",
      },
      {
        code: "41320",
        type: GeneralLedgerAccountType.Costs,
        description: "Afval ophalen en verwerken",
      },
      {
        code: "41350",
        type: GeneralLedgerAccountType.Costs,
        description: "Onderhoud inventaris",
      },
      {
        code: "41400",
        type: GeneralLedgerAccountType.Costs,
        description: "Schoonmaakkosten",
      },
      {
        code: "41500",
        type: GeneralLedgerAccountType.Costs,
        description: "Verzekering pand",
      },
      {
        code: "41510",
        type: GeneralLedgerAccountType.Costs,
        description: "Inboedelverzekering",
      },
      {
        code: "41600",
        type: GeneralLedgerAccountType.Costs,
        description: "Lokale heffingen en belastingen",
      },
      {
        code: "41610",
        type: GeneralLedgerAccountType.Costs,
        description: "Taxatiekosten",
      },
      {
        code: "41980",
        type: GeneralLedgerAccountType.Costs,
        description: "Overboekingsrekening huisvestingskosten",
      },
      {
        code: "41990",
        type: GeneralLedgerAccountType.Costs,
        description: "Overige huisvestingskosten",
      },
      {
        code: "42000",
        type: GeneralLedgerAccountType.Costs,
        description: "Leasekosten auto's",
      },
      {
        code: "42100",
        type: GeneralLedgerAccountType.Costs,
        description: "Huurkosten auto's",
      },
      {
        code: "42200",
        type: GeneralLedgerAccountType.Costs,
        description: "Brandstof",
      },
      {
        code: "42300",
        type: GeneralLedgerAccountType.Costs,
        description: "Onderhoud auto's",
      },
      {
        code: "42400",
        type: GeneralLedgerAccountType.Costs,
        description: "Verzekeringen auto's",
      },
      {
        code: "42500",
        type: GeneralLedgerAccountType.Costs,
        description: "Kilometervergoedingen",
      },
      {
        code: "42600",
        type: GeneralLedgerAccountType.Costs,
        description: "Wegenbelasting",
      },
      {
        code: "42610",
        type: GeneralLedgerAccountType.Costs,
        description: "Kilometerheffingen",
      },
      {
        code: "42800",
        type: GeneralLedgerAccountType.Costs,
        description: "Eigen bijdrage auto",
      },
      {
        code: "42900",
        type: GeneralLedgerAccountType.Costs,
        description: "Verkeersboetes",
      },
      {
        code: "42950",
        type: GeneralLedgerAccountType.Costs,
        description: "Parkeergelden",
      },
      {
        code: "42980",
        type: GeneralLedgerAccountType.Costs,
        description: "Overboekingsrekening autokosten",
      },
      {
        code: "42990",
        type: GeneralLedgerAccountType.Costs,
        description: "Overige autokosten",
      },
      {
        code: "43000",
        type: GeneralLedgerAccountType.Costs,
        description: "Transportkosten",
      },
      {
        code: "43100",
        type: GeneralLedgerAccountType.Costs,
        description: "Opslagkosten",
      },
      {
        code: "43980",
        type: GeneralLedgerAccountType.Costs,
        description: "Overboekingsrekening distributiekosten",
      },
      {
        code: "43990",
        type: GeneralLedgerAccountType.Costs,
        description: "Overige distributiekosten",
      },
      {
        code: "44000",
        type: GeneralLedgerAccountType.Costs,
        description: "Bureaukosten",
      },
      {
        code: "44050",
        type: GeneralLedgerAccountType.Costs,
        description: "Marketing materialen",
      },
      {
        code: "44060",
        type: GeneralLedgerAccountType.Costs,
        description: "Marketing acties",
      },
      {
        code: "44070",
        type: GeneralLedgerAccountType.Costs,
        description: "Relatiegeschenken",
      },
      {
        code: "44100",
        type: GeneralLedgerAccountType.Costs,
        description: "Advertentiekosten",
      },
      {
        code: "44200",
        type: GeneralLedgerAccountType.Costs,
        description: "Sponsoring",
      },
      {
        code: "44300",
        type: GeneralLedgerAccountType.Costs,
        description: "Beurskosten",
      },
      {
        code: "44400",
        type: GeneralLedgerAccountType.Costs,
        description: "Representatiekosten",
      },
      {
        code: "44450",
        type: GeneralLedgerAccountType.Costs,
        description: "Lunches en diners",
      },
      {
        code: "44500",
        type: GeneralLedgerAccountType.Costs,
        description: "Reis- en verblijfskosten verkoop",
      },
      {
        code: "44700",
        type: GeneralLedgerAccountType.Costs,
        description: "Provisies",
      },
      {
        code: "44800",
        type: GeneralLedgerAccountType.Costs,
        description: "Incassokosten",
      },
      {
        code: "44850",
        type: GeneralLedgerAccountType.Costs,
        description: "Afschrijvingskosten dubieuze debiteuren",
      },
      {
        code: "44900",
        type: GeneralLedgerAccountType.Costs,
        description: "Giften en Donaties",
      },
      {
        code: "44980",
        type: GeneralLedgerAccountType.Costs,
        description: "Overboekingsrekening verkoopkosten",
      },
      {
        code: "44990",
        type: GeneralLedgerAccountType.Costs,
        description: "Overige verkoopkosten",
      },
      {
        code: "45000",
        type: GeneralLedgerAccountType.Costs,
        description: "Postverzendingen",
      },
      {
        code: "45100",
        type: GeneralLedgerAccountType.Costs,
        description: "Telefoon- en internetkosten",
      },
      {
        code: "45200",
        type: GeneralLedgerAccountType.Costs,
        description: "Contributies en abonnementen",
      },
      {
        code: "45250",
        type: GeneralLedgerAccountType.Costs,
        description: "Vakliteratuur",
      },
      {
        code: "45300",
        type: GeneralLedgerAccountType.Costs,
        description: "Kantoorartikelen en drukwerk",
      },
      {
        code: "45310",
        type: GeneralLedgerAccountType.Costs,
        description: "Kleine aanschaffen kantoor",
      },
      {
        code: "45350",
        type: GeneralLedgerAccountType.Costs,
        description: "Automatiseringskosten",
      },
      {
        code: "45400",
        type: GeneralLedgerAccountType.Costs,
        description: "Verzekeringen algemeen",
      },
      {
        code: "45401",
        type: GeneralLedgerAccountType.Costs,
        description: "Rechtsbijstandsverzekering",
      },
      {
        code: "45402",
        type: GeneralLedgerAccountType.Costs,
        description: "Aansprakelijkheidsverzekering",
      },
      {
        code: "45500",
        type: GeneralLedgerAccountType.Costs,
        description: "Administratie- en accountantskosten",
      },
      {
        code: "45600",
        type: GeneralLedgerAccountType.Costs,
        description: "Notaris- en advocaatkosten",
      },
      {
        code: "45601",
        type: GeneralLedgerAccountType.Costs,
        description: "Makelaar & taxatiekosten",
      },
      {
        code: "45610",
        type: GeneralLedgerAccountType.Costs,
        description: "Overige adviseurs",
      },
      {
        code: "45620",
        type: GeneralLedgerAccountType.Costs,
        description: "Consultants",
      },
      {
        code: "45650",
        type: GeneralLedgerAccountType.Costs,
        description: "Beveiligingskosten",
      },
      {
        code: "45670",
        type: GeneralLedgerAccountType.Costs,
        description: "Reis- en verblijfkosten algemeen",
      },
      {
        code: "45680",
        type: GeneralLedgerAccountType.Costs,
        description: "Congressen en seminars",
      },
      {
        code: "45700",
        type: GeneralLedgerAccountType.Costs,
        description: "Vergunningen",
      },
      {
        code: "45750",
        type: GeneralLedgerAccountType.Costs,
        description: "Boetes",
      },
      {
        code: "45760",
        type: GeneralLedgerAccountType.Costs,
        description: "Incassokosten (boete)",
      },
      {
        code: "45800",
        type: GeneralLedgerAccountType.Costs,
        description: "Bankkosten",
      },
      {
        code: "45850",
        type: GeneralLedgerAccountType.Costs,
        description: "Koersverschillen",
      },
      {
        code: "45900",
        type: GeneralLedgerAccountType.Costs,
        description: "Betalingsverschillen",
      },
      {
        code: "45905",
        type: GeneralLedgerAccountType.Costs,
        description: "Betalingskorting",
      },
      {
        code: "45910",
        type: GeneralLedgerAccountType.Costs,
        description: "Btw-correcties",
      },
      {
        code: "45920",
        type: GeneralLedgerAccountType.Costs,
        description: "Priv�-gebruik kosten",
      },
      {
        code: "45950",
        type: GeneralLedgerAccountType.Costs,
        description: "Kasverschillen",
      },
      {
        code: "45955",
        type: GeneralLedgerAccountType.Costs,
        description: "Diverse contante uitgaven",
      },
      {
        code: "45980",
        type: GeneralLedgerAccountType.Costs,
        description: "Overboekingsrekening algemene kosten",
      },
      {
        code: "45990",
        type: GeneralLedgerAccountType.Costs,
        description: "Overige algemene kosten",
      },
      {
        code: "46000",
        type: GeneralLedgerAccountType.Costs,
        description: "Productiekosten",
      },
      {
        code: "46980",
        type: GeneralLedgerAccountType.Costs,
        description: "Overboekingsrekening productiekosten",
      },
      {
        code: "46990",
        type: GeneralLedgerAccountType.Costs,
        description: "Overige productiekosten",
      },
      {
        code: "47000",
        type: GeneralLedgerAccountType.Costs,
        description: "Aanschaf kleine machines en gereedschap",
      },
      {
        code: "47050",
        type: GeneralLedgerAccountType.Costs,
        description: "Huur van machines en gereedschappen",
      },
      {
        code: "47100",
        type: GeneralLedgerAccountType.Costs,
        description: "Onderhoud machines en installaties",
      },
      {
        code: "47200",
        type: GeneralLedgerAccountType.Costs,
        description: "Verlies en diefstal gereedschap",
      },
      {
        code: "48000",
        type: GeneralLedgerAccountType.Costs,
        description: "Afschrijvingskosten oprichtingskosten",
      },
      {
        code: "48100",
        type: GeneralLedgerAccountType.Costs,
        description: "Afschrijvingskosten uitgifte van aandelen",
      },
      {
        code: "48200",
        type: GeneralLedgerAccountType.Costs,
        description: "Afschrijvingskosten onderzoek en ontwikkeling",
      },
      {
        code: "48300",
        type: GeneralLedgerAccountType.Costs,
        description:
          "Afschrijvingskosten concessies, vergunningen en intellectuele eigendom",
      },
      {
        code: "48400",
        type: GeneralLedgerAccountType.Costs,
        description: "Afschrijvingskosten goodwill",
      },
      {
        code: "48500",
        type: GeneralLedgerAccountType.Costs,
        description: "Afschrijvingskosten software licenties",
      },
      {
        code: "49000",
        type: GeneralLedgerAccountType.Costs,
        description: "Afschrijvingskosten panden",
      },
      {
        code: "49050",
        type: GeneralLedgerAccountType.Costs,
        description: "Afschrijvingskosten verbouwingen",
      },
      {
        code: "49100",
        type: GeneralLedgerAccountType.Costs,
        description: "Afschrijvingskosten machines en installaties",
      },
      {
        code: "49200",
        type: GeneralLedgerAccountType.Costs,
        description: "Afschrijvingskosten inventaris en inrichting",
      },
      {
        code: "49300",
        type: GeneralLedgerAccountType.Costs,
        description: "Afschrijvingskosten hardware",
      },
      {
        code: "49400",
        type: GeneralLedgerAccountType.Costs,
        description: "Afschrijvingskosten software",
      },
      {
        code: "49500",
        type: GeneralLedgerAccountType.Costs,
        description: "Afschrijvingskosten auto's",
      },
      {
        code: "49600",
        type: GeneralLedgerAccountType.Costs,
        description:
          "Afschrijvingskosten niet aan de bedrijfsuitvoering dienstbare activa",
      },
      {
        code: "49999",
        type: GeneralLedgerAccountType.Costs,
        description: "Overboekingsrekening afschrijvingskosten",
      },
      {
        code: "88500",
        type: GeneralLedgerAccountType.Costs,
        description: "Herwaardering voorraden",
      },

      {
        code: "45906",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Ontvangen betalingskorting",
      },
      {
        code: "81010",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Kredietbeperking",
      },
      {
        code: "85000",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Rente baten",
      },
      {
        code: "85400",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Rente op overige langlopende vorderingen",
      },
      {
        code: "85800",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Rente op VPB",
      },
      {
        code: "85990",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Diverse financi�le baten",
      },
      {
        code: "86000",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Betaalde rente",
      },
      {
        code: "86400",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Hypotheekrente",
      },
      {
        code: "86600",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Betaalde rente op andere leningen en schulden",
      },
      {
        code: "86700",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Rente op stamrechtverplichting",
      },
      {
        code: "86710",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Storting lijfrente",
      },
      {
        code: "86900",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Overige betaalde rente",
      },
      {
        code: "86990",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Overige financi�le lasten",
      },
      {
        code: "87500",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Boekverlies verkoop vaste activa",
      },
      {
        code: "89000",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Buitengewone baten",
      },
      {
        code: "89050",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Subsidie",
      },
      {
        code: "89100",
        type: GeneralLedgerAccountType.FinancialIncomeExpenses,
        description: "Buitengewone lasten",
      },

      {
        code: "90000",
        type: GeneralLedgerAccountType.Taxes,
        description: "Vennootschapsbelasting",
      },
      {
        code: "99999",
        type: GeneralLedgerAccountType.Taxes,
        description: "Overboeking van het resultaat",
      },
    ];

    var i = 0;

    const saveARow = async () => {
      const elm = data[i];
      const ret = await generalLedgerAccountService.save({ data: elm });
      if (!ret.success) {
        console.log(ret, elm);
      }
      i++;
      await saveARow();
    };
    setIsLoading(true);
    await saveARow();

    setIsLoading(false);
  };

  return (
    <Paper sx={{ p: 2, m: 2, flexGrow: 1 }}>
      <LoaderContainer open={isLoading}>
        <Button onClick={handleClick}>do not click</Button>
      </LoaderContainer>
      <GeneralLedgerAccountsList />
    </Paper>
  );
};

export default AccountingChartPage;
