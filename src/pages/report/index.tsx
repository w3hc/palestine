import { Text, VStack, Box, Center, Heading, Divider, Container, Badge } from '@chakra-ui/react'
import { LinkComponent } from '../../components/layout/LinkComponent'
import Image from 'next/image'

export default function Report() {
  return (
    <>
      <main>
        <VStack spacing={6} align="stretch">
          <Heading as="h1" size="xl" textAlign="center" mt={15} mb={15}>
            Amnesty International Report&apos;s Executive Summary
          </Heading>

          <Container maxW="container.lg" p={0}>
            <Text fontSize="md" mb={4}>
              &quot;Here in Deir al-Balah, it&apos;s like an apocalypse. There is no room for you to pitch a tent; you have to set it up near the
              coast… You have to protect your children from insects, from the heat, and there is no clean water, no toilets, all while the bombing
              never stops. You feel like you are subhuman here.&quot;
            </Text>
            <Text fontSize="md" mb={4} fontStyle="italic" textAlign="right">
              Mohammed, a 42-year-old father of three, speaking in June 2024 about his experience of displacement from Rafah to Deir al-Balah
              governorate.
            </Text>

            <Text fontSize="md" mb={4}>
              On 7 October 2023, Israel embarked on a military offensive on the occupied Gaza Strip (Gaza) of unprecedented magnitude, scale and
              duration. Since then, it has carried out relentless aerial and ground attacks, many of them with large explosive weapons, which have
              caused massive damage and flattened entire neighbourhoods and cities across Gaza, along with their life-supporting infrastructure,
              agricultural land, and cultural and religious sites and symbols deeply engrained in Palestinians&apos; collective memory.
            </Text>

            <Text fontSize="md" mb={4}>
              Israel&apos;s military offensive has killed and seriously injured tens of thousands of Palestinians, including thousands of children,
              many of them in direct or indiscriminate attacks, often wiping out entire multigenerational families. Israel has forcibly displaced 90%
              of Gaza&apos;s 2.2 million inhabitants, many of them multiple times, into ever-shrinking, ever-changing pockets of land that lacked
              basic infrastructure, forcing people to live in conditions that exposed them to a slow and calculated death.
            </Text>

            <Text fontSize="md" mb={4}>
              It has deliberately obstructed or denied the import and delivery of life-saving goods and humanitarian aid. It has restricted power
              supplies that, together with damage and destruction, led to the collapse of the water, sanitation and healthcare systems. It has
              subjected hundreds, if not thousands, of Palestinians from Gaza to incommunicado detention and acts of torture and other cruel, inhuman
              or degrading treatment that had apparently resulted in at least 53 deaths by August 2024. The unlawful acts inflicted on Palestinians
              simultaneously, for months without respite, have had a profound, cumulative impact on the mental and physical health of Gaza&apos;s
              entire population: those who survived were left weakened, hungry or traumatized, with likely permanent effects on their mental and
              physical health.
            </Text>

            <Text fontSize="md" mb={4}>
              Such is the treatment that Israel has inflicted upon Palestinians in Gaza in retaliation for the Hamas-led attacks on southern Israel on
              7 October 2023. Early that morning, Hamas fighters indiscriminately fired a barrage of rockets into Israel and, joined by fighters from
              other Palestinian armed groups, breached the border fence that surrounds Gaza. Hamas and other armed groups attacked civilian and
              military targets, carrying out deliberate mass killings, summary killings and other abuses, causing suffering and physical injuries.
              They destroyed civilian property by burning houses, making them uninhabitable and causing the internal displacement of civilians. They
              abducted 223 civilians, Israeli and foreigners, including children, and captured 27 Israeli soldiers. Some of their actions constituted
              war crimes under international law. With approximately 1,200 people killed, over 800 of them civilians, including at least 36 children,
              these were the deadliest single-day attacks in Israel&apos;s history. Amnesty International&apos;s detailed findings about the crimes
              perpetrated by Hamas and other Palestinian armed groups in the context of their attacks on Israel on 7 October 2023 are the focus of a
              forthcoming publication.
            </Text>

            <Text fontSize="md" mb={4}>
              This report focuses on the Israeli authorities&apos; policies and actions in Gaza as part of the military offensive they launched in the
              wake of the Hamas-led attacks on 7 October 2023 while situating them within the broader context of Israel&apos;s unlawful occupation,
              and system of apartheid against Palestinians in Gaza, the West Bank, including East Jerusalem, and Israel. It assesses allegations of
              violations and crimes under international law by Israel in Gaza within the framework of genocide under international law, concluding
              that there is sufficient evidence to believe that Israel&apos;s conduct in Gaza following 7 October 2023 amounts to genocide.
            </Text>

            <Text fontSize="md" mb={4}>
              Given that the report is based on Amnesty International&apos;s field and desk research into violations perpetrated by Israel in Gaza
              between 7 October 2023 and early July 2024, it focuses on this nine-month period. However, it reflects overarching data until early
              October 2024 and key international developments until the end of November 2024.
            </Text>

            <Text fontSize="md" mb={4}>
              To make a determination on genocide, Amnesty International first examined whether Palestinians in Gaza constitute part of a protected
              group under the 1948 Convention on the Prevention and Punishment of the Crime of Genocide (Genocide Convention), that is a national,
              ethnical, racial or religious group. It then focused on three out of the five prohibited acts under the Genocide Convention:
              &quot;killing members of the group&quot;; &quot;causing serious bodily or mental harm to members of the group&quot;; and
              &quot;deliberately inflicting on the group conditions of life calculated to bring about its physical destruction in whole or in
              part&quot;. It finally examined whether Israel committed these acts with the specific &quot;intent to destroy, in whole or in part,
              [the] group, as such&quot;.
            </Text>

            <Text fontSize="md" mb={4}>
              To this end, Amnesty International interviewed 212 people as part of its research. They included Palestinian victims, survivors and
              witnesses of air strikes, displacement, detention, the destruction of farms, homes and agricultural land, as well as individuals who
              faced the impact of Israel&apos;s restrictions on humanitarian aid. Amnesty International also spoke with members of local authorities
              in Gaza, Palestinian healthcare workers and representatives of non-governmental organizations (NGOs) and UN agencies involved in the
              humanitarian response in Gaza.
            </Text>

            <Text fontSize="md" mb={4}>
              Amnesty International complemented these interviews with its analysis of an extensive range of visual and digital evidence, including
              satellite imagery, video footage and photographs posted on social media or obtained directly by its researchers. It authenticated and,
              where possible, geolocated video footage and photographs. It reviewed an extensive collection of media reports, statements, reports and
              data sets published by UN agencies and humanitarian organizations operating in Gaza, as well as Palestinian and Israeli human rights
              groups. It reviewed statements by senior Israeli government and military officials and official Israeli bodies, including spokespersons
              of the Israeli military and the Coordination of Government Activities in the Territories (COGAT), a unit within Israel&apos;s Ministry
              of Defense tasked with administering civilian matters in the Occupied Palestinian Territory (OPT).
            </Text>

            <Text fontSize="md" mb={4}>
              Amnesty International also examined submissions made to and decisions taken by the Israeli Supreme Court as well as publicly available
              material relating to South Africa&apos;s case against Israel at the International Court of Justice (ICJ). Despite its repeated attempts
              to engage with the Israeli authorities through information and meeting requests, the organization received no substantive answer to any
              of its letters sent between 30 October 2023 and 16 October 2024.
            </Text>

            <Heading as="h3" size="md" mt={6} mb={3}>
              OVERVIEW OF ISRAEL&apos;S OFFENSIVE
            </Heading>

            <Text fontSize="md" mb={4}>
              Hours after the 7 October 2023 attacks, Israel conducted a first wave of retaliatory air strikes on Gaza. Prime Minister Benjamin
              Netanyahu vowed that the offensive would continue &quot;with neither limitations nor respite&quot; until Israel destroyed Hamas&apos;s
              military and governing capabilities and brought all hostages back to Israel. He translated his words into actions. In the first two
              months of the offensive alone, the Israeli air force carried out about 10,000 air strikes in Gaza. Many used large explosive weapons
              with wide area effects on densely populated residential areas, including in the vicinity of hospitals and other critical infrastructure.
              The impact of such attacks on one of the most densely populated places on earth, with about 6,300 people per square kilometre, was
              devastating.
            </Text>

            <Text fontSize="md" mb={4}>
              On 13 October 2023, the Israeli military issued its first mass &quot;evacuation&quot; order, instructing some 1.1 million people – the
              entire population living north of Wadi Gaza – to move to the area south of Wadi Gaza &quot;for their safety and protection&quot;, and
              failing to take measures to ensure the displaced population&apos;s access to basic necessities. The order applied to hundreds of
              thousands of people who were already displaced and were sheltering in UN schools, as well as all patients and staff working in 23
              hospitals and medical facilities in the area. Humanitarian organizations, which had used Gaza City as their hub for years, were also
              subjected to the order and forced to leave behind warehouse supplies, equipment and vehicles, and to re-establish a humanitarian
              infrastructure from scratch in Rafah.
            </Text>

            <Text fontSize="md" mb={4}>
              Meanwhile, senior Israeli military and government officials intensified their calls for the destruction of Palestinians in Gaza, using
              racist and dehumanizing language that equated Palestinian civilians with the enemy to be destroyed.
            </Text>

            <Text fontSize="md" mb={4}>
              In a widely publicized statement made at a press conference on 12 October 2023, President Isaac Herzog held all Palestinians in Gaza
              responsible for Hamas&apos;s attacks: &quot;It&apos;s an entire nation out there that is responsible. It&apos;s not true this rhetoric
              about civilians not aware, not involved.&quot; While he maintained that his words had been misinterpreted, the slogan &quot;there are no
              uninvolved civilians&quot; was later scrawled near settlements in the occupied West Bank, demonstrating the statement&apos;s spread. In
              another illustrative example, on 11 November 2023, Minister of National Security Itamar Ben-Gvir posted a video clip from a show on
              Israeli TV in which he said that Palestinians who expressed support for Hamas and its actions were considered &quot;terrorists&quot; and
              must also be destroyed. He added this comment: &quot;To be clear, when they say that Hamas needs to be eliminated, it also means those
              who sing, those who support and those who distribute sweets, all of these are terrorists. And they should be eliminated!&quot;
            </Text>

            <Text fontSize="md" mb={4}>
              Within weeks of Israel&apos;s offensive, genocide and legal scholars, UN experts, as well as civil society organizations, warned that
              Palestinians in Gaza may be at risk of genocide. On 29 December 2023, South Africa instituted proceedings against Israel before the
              International Court of Justice (ICJ) over alleged breaches by Israel of its obligations under the Genocide Convention in relation to
              Palestinians in Gaza. This prompted the court to issue a series of legally binding provisional measures over the following months to
              guarantee the right of Palestinians in Gaza to be protected from acts of genocide. Yet, Israel failed to implement them. Despite
              expressing concern over Israel&apos;s conduct, and in the face of the ICJ&apos;s orders, the international community failed to take
              sufficient action to modify or stop Israel&apos;s actions. When the UN Security Council eventually adopted a three-phase ceasefire plan
              in June 2024, after an earlier resolution called for a time-limited ceasefire during the month of Ramadan in March 2024, it was too
              little too late.
            </Text>

            <Text fontSize="md" mb={4}>
              On 6 May 2024, Israeli forces went ahead with a long-threatened ground operation in Rafah despite a consensus among humanitarian
              organizations and repeated warnings by many states, including Israel&apos;s staunchest allies, that it would have cataclysmic
              implications for Palestinian civilians and the humanitarian response. Not only did Rafah provide shelter for over 1 million Palestinians
              after they were displaced following a series of mass &quot;evacuation&quot; orders by the Israeli military, but it also served at that
              point as the main hub for the humanitarian response. The operation drew near-unanimous international condemnation and prompted the ICJ
              to issue new provisional measures ordering Israel to &quot;immediately halt its military offensive&quot;. Israeli officials knew
              precisely the devastation the ground operation in Rafah would inflict on Palestinian civilians.
            </Text>

            <Text fontSize="md" mb={4}>
              The offensive on Rafah was launched a week after Minister of Finance Bezalel Smotrich, a member of Israel&apos;s security cabinet,
              explicitly called for the city&apos;s destruction by referring to a well-known Biblical story of absolute vengeance in which an entire
              nation – the people of Amalek – is ordered to be destroyed: &quot;There are no jobs half done. Rafah, Deir al-Balah, Nuseirat,
              destruction! Blot out the memory of [the people of] Amalek from under heaven,&quot; he said at a public event on 29 April 2024. In fact,
              Minister of Finance Smotrich and Minister of National Security Ben-Gvir, who also made some of the most explicit calls for the
              destruction of Palestinians in Gaza, threatened to quit the government coalition if Prime Minister Netanyahu abandoned plans to attack
              Rafah. Minister of Finance Smotrich&apos;s statement came months after Prime Minister Netanyahu first referred to the story of the total
              destruction of the people of Amalek in the first week of Israel&apos;s ground offensive in late October and early November 2023. He used
              it to garner support for what was, at the time, a new and highly destructive phase of the conflict. As Israel&apos;s highest
              office-holder, who oversaw the offensive on Gaza, Prime Minister Netanyahu would have most certainly known that his words would be
              understood by soldiers, particularly those affiliated with the settler movement and religious nationalist parties led by the two
              ministers, as calls for the destruction of Palestinians in Gaza.
            </Text>

            <Text fontSize="md" mb={4}>
              Following the operation, almost the entirety of Rafah&apos;s population, residents and displaced people, were forced to look for new
              temporary shelters in the governorate of Khan Younis, which had been made nearly uninhabitable due to the large-scale destruction caused
              by Israeli attacks and fighting with Palestinian armed groups, and in the Israeli-designated &quot;humanitarian zone&quot; of Al-Mawasi
              and &quot;expanded humanitarian area&quot; of Deir al-Balah, where newly displaced families struggled to find space to set themselves up
              amid tightly packed tents. Those forced out of Rafah were not able to return, and neither were those forced out of the area north of
              Wadi Gaza. The Rafah crossing, largely destroyed by Israeli forces, closed, cutting off Gaza&apos;s lifeline to Egypt.
            </Text>

            <Text fontSize="md" mb={4}>
              By 7 October 2024, the Gaza-based Ministry of Health had recorded 42,010 Palestinian fatalities in Gaza, the vast majority of which were
              of Palestinians killed during Israel&apos;s offensive, and 97,590 other Palestinians injured since 7 October 2023. The actual toll of
              those killed during the offensive may be higher and will only become apparent once the conflict is over, including when rescue teams are
              able to count the dead and retrieve missing bodies from under the rubble. The armed conflict in Gaza has seen some of the highest known
              death tolls among children (13,319 by 7 October 2024), journalists, as well as health and humanitarian workers of any recent conflict in
              the world.
            </Text>

            <Text fontSize="md" mb={4}>
              The level and speed of damage to and destruction of homes and infrastructure across all sectors of economic activity has similarly not
              been seen in any other conflict in the 21st century, with remote sensing experts noting that it was &quot;much faster and more
              extensive&quot; than anything they had mapped before. About 62% of all homes in Gaza were damaged or destroyed by January 2024,
              affecting approximately 1.08 million people, according to a joint Interim Damage Assessment published by the World Bank, the EU and the
              UN in March 2024. By July 2024, around 63% of the total structures in Gaza had been damaged or destroyed, according to a UN Satellite
              Centre (UNOSAT) satellite imagery-based assessment. Amnesty International estimated that there was, on average, one damaged or destroyed
              building every 17 metres in Gaza by then. Meanwhile, some 625,000 students missed out on an entire academic year, with an estimated 85%
              of schools having sustained some form of damage.
            </Text>

            <Text fontSize="md" mb={4}>
              In May 2024, the announcement by the Prosecutor of the International Criminal Court (ICC) that he had applied to the court for arrest
              warrants against Israeli Prime Minister Netanyahu and Minister of Defense Yoav Gallant over their alleged criminal responsibility for
              war crimes and crimes against humanity prompted Israel&apos;s Military Advocate General to publicly confirm that the military police had
              opened criminal investigations into 70 incidents where the commission of a criminal offence was suspected. This included allegations of
              deaths under torture, killings and other incidents of violence. However, as far as Amnesty International has been able to confirm from
              publicly available sources, by 30 September 2024, there had been only one indictment of an Israeli soldier in relation to the torture of
              Palestinian detainees, demonstrating a near-total lack of accountability in line with a well-documented long-standing pattern of
              impunity.
            </Text>

            <Text fontSize="md" mb={4}>
              Finally, instead of complying with the ICJ advisory opinion issued in July 2024, which concluded that Israel&apos;s 57-year-old
              occupation and annexation of Palestinian territory is unlawful and called on Israel to withdraw all of its military forces and remove
              civilian settlements and settlers, Israel entrenched its military presence in Gaza by establishing and maintaining a linear military
              zone that it referred to as the &quot;Netzarim Corridor&quot; on either side of an existing east-west road south of Gaza City, which cut
              off the area north of Wadi Gaza from the area south of it. The zone threatened to perpetuate displacement and the fragmentation of Gaza.
            </Text>

            <Heading as="h3" size="md" mt={6} mb={3}>
              GENOCIDE UNDER INTERNATIONAL LAW
            </Heading>

            <Text fontSize="md" mb={4}>
              Genocide is a crime under international law, whether committed in times of peace or armed conflict. It is prohibited and criminalized
              under the Genocide Convention, which Israel ratified in 1950, and the Rome Statute.
            </Text>

            <Text fontSize="md" mb={4}>
              Under Article II of the Genocide Convention, five specific acts constitute the underlying criminal conduct of the crime of genocide,
              including: killing members of the group; causing serious bodily or mental harm to members of the group; deliberately inflicting on the
              group conditions of life calculated to bring about its physical destruction in whole or in part; imposing measures intended to prevent
              births within the group; and forcibly transferring children of the group to another group. Each of these acts must be committed with a
              general intent to commit the underlying act. However, to constitute the crime of genocide, these acts must also be committed &quot;with
              intent to destroy, in whole or in part, a national, ethnical, racial or religious group, as such…&quot; This specific intent is what
              distinguishes genocide from other crimes under international law.
            </Text>

            <Text fontSize="md" mb={4}>
              Regardless of whether individual Palestinians are citizens of Israel living in Israel, are living under Israeli military rule in the OPT
              or are Palestinian refugees, they overwhelmingly identify as Palestinian and have deep and shared political, ethnic, social and cultural
              ties. Palestinians share a common language and have similar customs and cultural practices, despite having different religions. They,
              therefore, constitute a distinct &quot;national&quot;, &quot;ethnical&quot; and &quot;racial&quot; group protected under the Genocide
              Convention, as established by the ICJ&apos;s preliminary finding in its order of 26 January 2024.
            </Text>

            <Text fontSize="md" mb={4}>
              An intent to destroy a group &quot;in part&quot; is sufficient to establish the requisite specific intent for the crime of genocide. In
              determining what constitutes &quot;part&quot; of the group, international jurisprudence has adopted a requirement of substantiality
              rather than a specific numeric threshold. This standard requires that the perpetrator must intend to destroy at least a
              &quot;substantial part&quot; of the group in question, which must be &quot;significant enough to have an impact on the group as a
              whole&quot;. In applying it to Israel&apos;s offensive, Amnesty International considers that Palestinians in Gaza constitute a
              &quot;substantial part&quot; of the whole group of Palestinians, in line with the ICJ&apos;s preliminary finding mentioned above. In
              2023, Palestinians living in Gaza comprised approximately 40% of the nearly 5.5 million Palestinians living in the OPT.
            </Text>

            <Text fontSize="md" mb={4}>
              Importantly, the perpetrator does not need to succeed in destroying the targeted group, either in whole or in part, for genocide to be
              established. International jurisprudence recognizes that &quot;the term &apos;in whole or in part&apos; refers to the intent, as opposed
              to the actual destruction&quot;. Equally important, finding or inferring specific intent does not require finding a single or sole
              intent. A state&apos;s actions can serve the dual goal of achieving a military result and destroying a group as such. Genocide can also
              be the means for achieving a military result. In other words, a finding of genocide may be drawn when the state intends to pursue the
              destruction of a protected group in order to achieve a certain military result, as a means to an end, or until it has achieved it.
              Amnesty International does not consider international jurisprudence, including that of the ICJ, to preclude either instrumental or dual
              intent, as long as genocidal intent is clearly assessed to be the state&apos;s intent based on the totality of the evidence. Allowing
              for dual or instrumental intent is the only way to ensure that genocide remains prohibited during times of war. International law places
              certain conduct, including genocide, outside the permissible methods of war, meaning there are acts which can never be justified by
              military necessity.
            </Text>

            <Text fontSize="md" mb={4}>
              Amnesty International considered the possible commission of genocide by Israel from the perspective of state responsibility, and did not
              engage in an analysis of the possible criminal responsibility of individuals.
            </Text>

            <Heading as="h3" size="md" mt={6} mb={3}>
              KILLINGS AND SERIOUS INJURIES
            </Heading>

            <Text fontSize="md" mb={4}>
              &quot;My body survived but my spirit died with my children, it was crushed under the rubble with them.&quot;
            </Text>

            <Text fontSize="md" mb={4} fontStyle="italic" textAlign="right">
              Ahmad Nasman, whose parents, sister, wife and three children were killed in an Israeli air strike on 14 December 2023.
            </Text>

            <Text fontSize="md" mb={4}>
              To constitute the act of &quot;killing members of the group&quot; as prohibited under the Genocide Convention, killings must be
              intentional. Within the context of armed conflict, &quot;killing&quot; may include causing the deaths of civilians through direct
              attacks on civilians and civilian objects, as well as through indiscriminate attacks that are directed deliberately at the civilian
              population alongside military objectives. Meanwhile, the act of &quot;causing serious bodily or mental harm to members of the
              group&quot; requires the infliction of harm so serious as to threaten or contribute to the physical or biological destruction of the
              group. Although the harm does not need to be permanent or irreversible, international jurisprudence has required it to cause &quot;grave
              and long-term disadvantage to a person&apos;s ability to lead a normal and constructive life.&quot;
            </Text>

            <Text fontSize="md" mb={4}>
              Amnesty International has focused on the acts of &quot;killing members of the group&quot; and &quot;causing [them] serious mental and
              bodily harm&quot; perpetrated by Israel in the context of its aerial attacks. It reviewed the results of investigations it had conducted
              into 15 air strikes that took place in northern, central and southern Gaza between 7 October 2023 and 20 April 2024. These air strikes
              hit 12 homes and other residential buildings, a church, a street and a public market – all of them located in densely populated urban
              areas. They killed at least 334 civilians, including at least 141 children, and wounded hundreds of others. The organization concluded
              that they constituted direct attacks on civilians and civilian objects or deliberately indiscriminate attacks, and likely amount to war
              crimes.
            </Text>

            <Text fontSize="md" mb={4}>
              Amnesty International&apos;s in-depth investigation found that all 15 locations that were struck were civilian objects, and that it was
              Israel which had launched the air strikes. Amnesty International did not find any evidence that any of the strikes were directed at a
              military objective. A review of all available evidence showed that all those killed were civilians not taking a direct part in
              hostilities.
            </Text>

            <Text fontSize="md" mb={4}>
              These attacks were conducted in ways that were designed to cause a very high number of fatalities and injuries among the civilian
              population. This is evidenced through Israel&apos;s use of explosive weapons with wide area effects, the timing and location of the
              attacks and the lack of an effective warning, in one case, or of any warnings at all, in all others.
            </Text>

            <Text fontSize="md" mb={4}>
              In several cases, Amnesty International&apos;s analysis of weapons fragments showed that Israel used large bombs, such as
              US-manufactured Joint Direct Attack Munitions (JDAM). At least five of the attacks struck homes and other residential buildings between
              11pm and 4am when their residents were likely to be sleeping. In addition, 11 of the 15 attacks were carried out on homes and other
              buildings south of Wadi Gaza, where people living north of Wadi Gaza were ordered to flee following the mass &quot;evacuation&quot;
              order of 13 October 2023. These locations, known for their population density, were even more overcrowded than usual due to the influx
              of displaced people, with many homes hosting extended families.
            </Text>

            <Text fontSize="md" mb={4}>
              In one illustrative case, Abdallah Shehada, a 69-year-old retired surgeon, was killed after an Israeli air strike destroyed his home in
              Rafah. The attack, which occurred at 11.45am on 14 December 2023, killed 30 other civilians: 11 children, eight men and 11 women. At
              least 10 others were wounded. Some 45 people had been residing in the three-storey building. Among them were 20 members of the Nasman
              family who were displaced from Gaza City to the south and sought safety at their relative&apos;s house.
            </Text>

            <Text fontSize="md" mb={4}>
              The oldest victim of the attack was Hamdi Abu Daff, a displaced 86-year-old man, while the youngest was Ayla Nasman, aged only three
              months. Ayla Nasman&apos;s grandparents, mother and two siblings, aged five and four, were all killed in the attack. Her father, Ahmad
              Nasman, a physiotherapist, was among the few members of the extended Nasman family to survive the attack. He said that it took him four
              days to retrieve Ayla&apos;s body from the rubble; the blast had decapitated his five-year-old child, Arwa.
            </Text>

            <Text fontSize="md" mb={4}>
              Although this report focused on a nine-month period, Israel&apos;s policies, actions and omissions do not appear to have changed in any
              significant way. In fact, since Amnesty International completed its research, Israel&apos;s offensive in Gaza expanded. In August,
              September and October 2024, more people in Gaza were displaced, more people were killed and injured in Israel&apos;s attacks, and more
              people were detained amidst concerns of torture and other ill-treatment. Once again, Israeli forces ordered Palestinian civilians living
              north of Wadi Gaza to leave the area while continuing their relentless bombardment, and, once again, the area was cut off from aid, with
              many facing starvation.
            </Text>

            <Text fontSize="md" mb={4}>
              Amnesty International recognizes that there is resistance and hesitancy among many, mainly other states, in finding genocidal intent
              when it comes to Israel&apos;s conduct in Gaza. This resistance has impeded justice and accountability with respect to past conflicts
              around the world and should be avoided in the future. Amnesty International concedes that identifying genocide in armed conflict is
              complex and challenging, because of the multiple objectives that may exist simultaneously. Nonetheless, it is critical to recognize
              genocide when it occurs in the context of armed conflict, and to insist that war can never excuse it.
            </Text>

            <Text fontSize="md" mb={4}>
              To stop the commission of prohibited acts, prevent any such acts in the future, and ensure accountability and full reparation, Amnesty
              International is making a range of recommendations to the Israeli authorities, third states, the UN and regional organizations, the
              Office of the Prosecutor of the ICC, and the Palestinian authorities. It has provided an overview of its main recommendations below.
            </Text>

            <Text fontSize="md" mb={4}>
              As a priority, Israel must take the necessary actions to urgently end the commission of prohibited acts under the Genocide Convention
              against Palestinians in Gaza and to prevent the further commission of any such acts by any of its state organs. It must also engage
              fully with any international investigations into genocide as well as proceedings before the ICJ, including by complying with all
              provisional measures issued by this court since 26 January 2024. Amnesty International is also calling on Israel to urgently improve the
              humanitarian situation in Gaza in line with its obligations as the occupying power, as well as its obligations as a party to the armed
              conflict, and to reverse all policies and actions that have resulted in the rapid deterioration of conditions of life in Gaza.
            </Text>

            <Text fontSize="md" mb={4}>
              This must start by allowing the unhindered passage into and within Gaza of sufficient, safe and affordable quantities of essential goods
              and materials necessary for the reconstruction and repair of damaged and destroyed civilian property and infrastructure. Israel must
              also immediately open all available aid routes and access points and ensure that the basic needs of people living in Gaza are met. It
              must enable access to essential services, through the sufficient and continuous supply of electricity and fuel. Amnesty International is
              calling on Israel to allow all Palestinians forcibly displaced since 7 October 2023 to return to their areas of residence or any other
              areas of their choosing in Gaza, including to areas located north of Wadi Gaza. Similarly, all civilians residing in the area located
              north of Wadi Gaza must be allowed free passage to the area located south of it if they so wish, without any undue restrictions on their
              movement. Until homes are rebuilt, Israel must ensure access to temporary dignified housing. Israel must allow all patients in need of
              urgent medical treatment not available in Gaza access to healthcare in other parts of the OPT or abroad, and allow their return after
              their treatment.
            </Text>

            <Text fontSize="md" mb={4}>
              Amnesty International renews its call on Israel, Hamas and other Palestinian armed groups to agree to an immediate, sustained ceasefire.
              Similarly, only drastic systemic change will ultimately put an end to Israeli crimes under international law, provide victims with full
              and effective reparations and reduce the risk of genocidal acts in the future. This requires Israel to end its unlawful occupation of
              Gaza and the rest of the OPT in line with the ICJ&apos;s advisory opinion of 19 July 2024 and to dismantle its apartheid system,
              including the 17-year-old blockade that controls and oppresses Palestinians in Gaza.
            </Text>

            <Text fontSize="md" mb={4}>
              Strong and sustained international action is required to ensure that Israel implements these recommendations. In line with their
              obligation to prevent and punish acts of genocide, Amnesty International calls on all states, particularly those with influence over
              Israel, including its strongest allies such as the USA, the UK, Germany, and certain other EU member states, to take urgent steps to
              bring an end to all Israeli conduct in Gaza which may amount to genocide. As a first step, they must ensure that Israel duly implements
              all provisional measures ordered by the ICJ since 26 January 2024. In line with the ICJ&apos;s advisory opinion of 19 July 2024, states
              must not render aid or assistance in maintaining the unlawful situation created by Israel&apos;s continued occupation of the OPT,
              reinforced through apartheid.
            </Text>

            <Text fontSize="md" mb={4}>
              States must also urgently oppose any attempts by Israel to establish a permanent military presence in Gaza, alter its borders and
              demographic make-up or shrink its territory, including through any expanded buffer zones or the construction of permanent checkpoints
              inside Gaza. To stop fuelling violations of international law, they must immediately suspend the direct and indirect supply, sale or
              transfer, to Israel of all weapons and other military equipment, and stop the provision of training and other military and security
              assistance. Amnesty International is also calling on states to adopt adequate policies to ensure that private legal entities registered
              in their jurisdiction cease the provision of military services, technology and supplies used by Israel in its military operations in
              Gaza.
            </Text>

            <Text fontSize="md" mb={4}>
              States can and should also take actions to ensure justice and accountability for any alleged crimes under international law, including
              war crimes, crimes against humanity and genocide, perpetrated in Gaza since 7 October 2023 by exercising domestic, universal or other
              forms of extraterritorial criminal jurisdiction, pressuring Israel to allow entry into Gaza of members and staff of any international
              investigative or UN-mandated mechanism, supporting the investigation of the Office of the Prosecutor of the ICC into crimes allegedly
              committed in Israel and the OPT, including through executing any ICC arrest warrants.
            </Text>

            <Text fontSize="md" mb={4}>
              Amnesty International calls on the Office of the Prosecutor of the ICC to urgently consider the commission of the crime of genocide by
              Israeli officials since 7 October 2023 in the ongoing investigation into the situation in the State of Palestine and to promptly
              investigate and prosecute apartheid as a crime against humanity. The Office of the Prosecutor should also publicly condemn attacks on
              NGOs that are targeted for their work on international justice. In line with the Office of the Prosecutor&apos;s Policy on
              Complementarity and Cooperation, where appropriate, Amnesty International is also calling on the Office to consider cooperating and
              sharing information with national authorities concerning crimes under international law committed in Israel and the OPT to ensure that
              states investigate and prosecute such crimes where they have jurisdiction.
            </Text>

            <Text fontSize="md" mb={4}>
              In light of the unprecedented number of deaths and injuries of Palestinians in Gaza and the deadly attacks perpetrated by Hamas and
              other Palestinian armed groups in southern Israel, Amnesty International is renewing its call on the UN Security Council to impose a
              comprehensive arms embargo on Israel, Hamas and other and Palestinian armed groups operating in Gaza. The UN Security Council should
              also impose targeted sanctions, such as asset freezes, against Israeli and Hamas officials most implicated in crimes under international
              law, including those committed in the context of Israel&apos;s ongoing offensive on Gaza. Finally, the UN Security Council should take
              steps to advance the withdrawal by Israel from the OPT, in line with the ICJ&apos;s advisory opinion of 19 July 2024 and the UN General
              Assembly resolution of 18 September 2024 demanding that Israel end its unlawful presence and policies in the OPT within 12 months.
            </Text>

            <Text fontSize="md" mb={4}>
              To break with the cycle of abuse, Amnesty International is also making a set of recommendations to Hamas, including to immediately and
              unconditionally release civilian hostages and ensure all captives are treated humanely and visited by the International Committee of the
              Red Cross (ICRC) and other international monitors. Meanwhile, authorities of the State of Palestine should expedite the opening of
              investigations into all allegations of crimes under international law and other serious human rights violations committed by members of
              Palestinian armed groups, with a view to bringing those reasonably suspected of individual criminal responsibility to trial in
              proceedings that meet international standards, without recourse to the death penalty.
            </Text>
          </Container>

          <Center>
            <VStack spacing={3}>
              <Box position="relative" width="200px" height="300px" overflow="hidden" borderRadius="lg">
                <LinkComponent href="https://www.amnesty.org/en/documents/mde15/8668/2024/en/">
                  <Image priority layout="fill" objectFit="cover" alt="Amnesty International Report" src="/amnesty-international-report.png" />
                </LinkComponent>
              </Box>
              <LinkComponent href="https://www.amnesty.org/en/documents/mde15/8668/2024/en/">Read the full report</LinkComponent>
            </VStack>
          </Center>
          <br />
          <br />
        </VStack>
      </main>
    </>
  )
}
