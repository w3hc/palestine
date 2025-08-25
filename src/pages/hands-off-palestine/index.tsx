import React, { useEffect, useState } from 'react'
import { Text, VStack, Box, Heading, Container, Divider, Select, Flex } from '@chakra-ui/react'
import { LinkComponent } from '../../components/layout/LinkComponent'

export default function HandsOffPalestine() {
  const [selectedLanguage, setSelectedLanguage] = useState('fr')

  // Scroll to anchor on mount if hash exists
  useEffect(() => {
    if (window.location.hash) {
      const langCode = window.location.hash.substring(1)
      if (['fr', 'en', 'zh'].includes(langCode)) {
        setSelectedLanguage(langCode)
        const element = document.getElementById(langCode)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }, [])

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const langCode = event.target.value
    setSelectedLanguage(langCode)
    const element = document.getElementById(langCode)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // Update URL hash without triggering page reload
    window.history.pushState(null, '', `#${langCode}`)
  }

  return (
    <>
      <main>
        <Container maxW="container.lg" p={0}>
          {/* Language Selector - Top Right */}
          <Flex justify="flex-end" mb={6} mt={4}>
            <Box>
              <Select value={selectedLanguage} onChange={handleLanguageChange} size="sm" width="120px" bg="white" _dark={{ bg: 'gray.800' }}>
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="zh">中文</option>
              </Select>
            </Box>
          </Flex>

          <VStack spacing={8} align="stretch">
            {/* French Version */}
            <Box id="fr">
              <Heading as="h1" size="xl" textAlign="center" mb={8} mt={8}>
                Pour que vive la Palestine
              </Heading>

              <Text fontSize="md" mb={4}>
                Ils disent qu&apos;ils ont le droit de se défendre, mais ils ont lâché des dizaines de milliers de tonnes de bombes sur les gens qui
                vivaient là. Ils disent qu&apos;ils gèrent l&apos;aide humanitaire, mais ils ont tué des gamins qui venaient chercher un sac de
                farine. Ils disent qu&apos;il suffirait de libérer les otages pour que le massacre s&apos;arrête, mais ce sont eux-même qui ont saboté
                toutes les négociations, ils ont frappé aveuglément, ils ont tout détruit. En Cisjordanie, les colons harcèlent, humilient, enferment,
                et tuent sans pitié. Combien de milliers de Palestiniens ont été arrêtés et emprisonnés sans procès ? Combien sont torturés dans ces
                prisons depuis des années ? Quand seront-ils libérés ?
              </Text>

              <Text fontSize="md" mb={4}>
                La stratégie israélienne est connue : ils rendent la vie impossible aux Palestiniennes et Palestiniens pour les chasser et prendre
                leur terre. À Jérusalem-Est et en Cisjordanie cela fait des décennies qu&apos;ils divisent méthodiquement les villages les uns des
                autres, qu&apos;ils détruisent les maisons et déracinent les cultures à coup de bulldozers en espérant que les gens désespèrent et
                s&apos;en aillent. À Gaza, ils affament de façon cynique celles et ceux qui ont survécu aux bombardements. Les gens s&apos;entretuent
                pour un paquet de gâteaux. Ils les assoiffent jusqu&apos;à ce qu&apos;ils craquent et décident de partir. Mais Gaza est assiégée. Ils
                ne peuvent pas partir. Ils sont piégés. Ce qui se passe n&apos;est ni une guerre ni une catastrophe naturelle, c&apos;est un génocide.
                Le nettoyage ethnique en cours depuis des années est devenu en génocide.
              </Text>

              <Text fontSize="md" mb={4}>
                Nous ne le laisserons pas faire.
              </Text>

              <Text fontSize="md" mb={4}>
                L&apos;attaque d&apos;octobre 2023 ne peut en rien justifier la mort de centaines d&apos;humanitaires, de centaines de journalistes,
                de milliers de soignants et de dizaines de milliers d&apos;enfants. Le monde entier est horrifié de ce déferlement de violence
                aveugle. L&apos;Histoire n&apos;a pas commencé le 7 octobre : au début des années 80, il n&apos;y avait ni Hezbollah ni Hamas, et
                pourtant Israël terrorisait déjà le peuple palestinien en toute impunité. Et aujourd&apos;hui on ampute des enfants sans anesthésie
                tous les jours parce que des soldats israéliens s&apos;amusent à leur tirer dessus au sniper avant de s&apos;en vanter sur les
                réseaux.
              </Text>

              <Text fontSize="md" mb={4}>
                Nous ne pourrons pas dire que nous ne savions pas. Que dirons nos enfants si nous n&apos;agissons pas aujourd&apos;hui ? La Palestine
                vit sous occupation étrangère depuis un siècle. Malgré les résolutions de l&apos;ONU, les déclarations et les bonnes intentions des
                uns et des autres, très peu d&apos;actions contraignantes ont été engagées contre Israël. C&apos;est nous qui paierons cash le prix de
                la lâcheté politique généralisée.
              </Text>

              <Text fontSize="md" mb={4}>
                La colonisation doit cesser.
              </Text>

              <Text fontSize="md" mb={4}>
                Le <LinkComponent href="/le-groupe-de-la-haye">Groupe de La Haye</LinkComponent> est une coalition internationale créée pour
                coordonner des mesures juridiques, diplomatiques et économiques contre les violations du droit international en Palestine. Lancé par 8
                pays, ce mouvement rassemble désormais 30 participants déterminés à faire respecter le droit international.
              </Text>

              <Text fontSize="md" mb={4}>
                Six mesures concrètes ont été adoptées lors de la conférence de Bogotá pour briser l&apos;impunité d&apos;Israël : un embargo total
                sur les armes et équipements militaires, l&apos;interdiction d&apos;accostage des navires transportant du matériel militaire vers
                Israël, le contrôle systématique des navires battant pavillon national, la révision de tous les contrats publics avec des entreprises
                complices, l&apos;engagement de poursuites judiciaires nationales contre les responsables de crimes de guerre, et l&apos;application
                du principe de compétence universelle pour que les criminels soient jugés et condamnés.
              </Text>

              <Text fontSize="md" mb={4}>
                La Namibie et la Malaisie ont bloqué l&apos;accès à leurs ports aux navires transportant des armes vers Israël. La Colombie a suspendu
                ses exportations et rappelé son ambassadeur d&apos;Israël. La Bolivie a également rappelé son ambassadeur. Nous appelons tous les pays
                du monde à rejoindre le Groupe de La Haye et à mettre en place immédiatement ces mesures décisives. Ils ont l&apos;obligation
                juridique d&apos;agir, et c&apos;est à nous de leur rappeler avec la plus grande force : c&apos;est la seule façon de mettre fin au
                génocide et à l&apos;occupation.
              </Text>

              <Text fontSize="md" mb={4}>
                Faisons l&apos;effort de la compréhension de l&apos;autre. C&apos;est l&apos;affaire de tous. Portez aussi loin que possible la voix
                des Palestiniennes et de Palestiniens. Quoi qu&apos;il arrive dans le futur, nous les aiderons à reconstruire la Palestine de demain.
                Par le dialogue et par l&apos;entraide, nous ferons taire les armes, les mensonges et la bêtise. Nous ferons respecter le droit pour
                que vive la Palestine.
              </Text>

              <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} mt={6}>
                Publié le 6 août 2025 par
                <LinkComponent href="https://julienberanger.com/contact"> Julien Béranger</LinkComponent>
              </Text>
              <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                Source :{' '}
                <LinkComponent href="https://github.com/palestine-will-live/hands-off-palestine">
                  https://github.com/palestine-will-live/hands-off-palestine
                </LinkComponent>
              </Text>
              <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                Licence :{' '}
                <LinkComponent href="https://github.com/palestine-will-live/hands-off-palestine?tab=readme-ov-file#license">
                  CC BY-ND 4.0
                </LinkComponent>
              </Text>
            </Box>

            <Divider my={8} />

            {/* English Version */}
            <Box id="en">
              <Heading as="h1" size="xl" textAlign="center" mb={8} mt={8}>
                Hands Off Palestine
              </Heading>

              <Text fontSize="md" mb={4}>
                They say they have the right to defend themselves, but they dropped tens of thousands of tons of bombs on the people who lived there.
                They say they manage humanitarian aid, but they killed children who came looking for a bag of flour. They say that releasing the
                hostages would be enough to stop the massacre, but they themselves sabotaged all negotiations, they struck blindly, they destroyed
                everything. In the West Bank, settlers harass, humiliate, imprison, and kill without mercy. How many thousands of Palestinians have
                been arrested and locked down without trial? How many have been tortured in these prisons for years? When will they be freed?
              </Text>

              <Text fontSize="md" mb={4}>
                The Israeli strategy is well-known: they make life impossible for Palestinian men and women to drive them out and take their land. In
                East Jerusalem and the West Bank, for decades they have methodically divided villages from one another, destroyed homes and uprooted
                crops with bulldozers, hoping that people will despair and leave. In Gaza, they cynically starve those who survived the bombings.
                People kill each other for a packet of cookies. They make them thirsty until they crack and decide to leave. But Gaza is under siege.
                They cannot leave. They are trapped. What is happening is neither a war nor a natural disaster, it is genocide. The ethnic cleansing
                that has been ongoing for years has become genocide.
              </Text>

              <Text fontSize="md" mb={4}>
                We will not let this happen.
              </Text>

              <Text fontSize="md" mb={4}>
                The October 2023 attack can in no way justify the death of hundreds of humanitarian workers, hundreds of journalists, thousands of
                healthcare workers, and tens of thousands of children. The entire world is horrified by this outpouring of blind violence. History did
                not begin on October 7th: in the early 1980s, there was neither Hezbollah nor Hamas, and yet Israel was already terrorizing the
                Palestinian people with complete impunity. And today kids are being amputated without anesthesia every day because Israeli soldiers
                amuse themselves by shooting them with snipers before boasting about it on the networks.
              </Text>

              <Text fontSize="md" mb={4}>
                We cannot say that we did not know. What will our children say if we do not act today? Palestine has lived under foreign occupation
                for a century. Despite UN resolutions, declarations and good intentions, very few binding actions have been taken against Israel. We
                are the ones who will pay cash for the generalized political cowardice.
              </Text>

              <Text fontSize="md" mb={4}>
                Colonization must end.
              </Text>

              <Text fontSize="md" mb={4}>
                The Hague Group is an international coalition created to coordinate legal, diplomatic and economic measures against violations of
                international law in Palestine. Launched by 8 countries, this movement now brings together 30 participants determined to enforce
                international law.
              </Text>

              <Text fontSize="md" mb={4}>
                Six concrete measures were adopted at the Bogotá conference to break Israel&apos;s impunity: a total embargo on weapons and military
                equipment, the prohibition of docking for ships carrying military material to Israel, systematic inspection of ships flying the
                national flag, review of all public contracts with complicit companies, the initiation of national judicial proceedings against those
                responsible for war crimes, and the application of the principle of universal jurisdiction so that criminals are tried and convicted.
              </Text>

              <Text fontSize="md" mb={4}>
                Namibia and Malaysia have blocked access to their ports for ships carrying weapons to Israel. Colombia has suspended its exports and
                recalled its ambassador from Israel. Bolivia has also recalled its ambassador. We call on all countries of the world to join the Hague
                Group and to immediately implement these decisive measures. They have a legal obligation to act, and it is up to us to remind them
                with the greatest force: this is the only way to end the genocide and occupation.
              </Text>

              <Text fontSize="md" mb={4}>
                Let us make the effort to understand one another. This is everyone&apos;s concern. Carry as far as possible the voice of Palestinian
                men and women. Whatever happens in the future, we will help them rebuild tomorrow&apos;s Palestine. Through dialogue and mutual aid,
                we will silence the weapons, lies and stupidity. We will enforce the law so that Palestine will live.
              </Text>

              <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} mt={6}>
                Published on August 6, 2025 by
                <LinkComponent href="https://julienberanger.com/contact"> Julien Béranger</LinkComponent>
              </Text>
              <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                Source:{' '}
                <LinkComponent href="https://github.com/palestine-will-live/hands-off-palestine">
                  https://github.com/palestine-will-live/hands-off-palestine
                </LinkComponent>
              </Text>
              <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                License:{' '}
                <LinkComponent href="https://github.com/palestine-will-live/hands-off-palestine?tab=readme-ov-file#license">
                  CC BY-ND 4.0
                </LinkComponent>
              </Text>
            </Box>

            <Divider my={8} />

            {/* Chinese Version */}
            <Box id="zh">
              <Heading as="h1" size="xl" textAlign="center" mb={8} mt={8}>
                不要干涉巴勒斯坦
              </Heading>

              <Text fontSize="md" mb={4}>
                他们声称有自卫权，但他们向生活在那里的人们投下了数万吨炸弹。他们声称在管理人道主义援助，但他们杀死了前来寻找一袋面粉的孩子们。他们声称只要释放人质就能停止屠杀，但正是他们自己破坏了所有谈判，他们盲目打击，摧毁了一切。在约旦河西岸，定居者毫不留情地骚扰、羞辱、监禁和杀害巴勒斯坦人。有多少千名巴勒斯坦人被逮捕并未经审判就被关押？有多少人在这些监狱中被折磨了多年？他们什么时候才能获得自由？
              </Text>

              <Text fontSize="md" mb={4}>
                以色列的战略众所周知：他们让巴勒斯坦男女老少的生活变得不可能，以驱赶他们并夺取他们的土地。在东耶路撒冷和约旦河西岸，几十年来他们有条不紊地将村庄彼此分割，用推土机摧毁房屋和铲除农作物，希望人们绝望并离开。在加沙，他们冷酷地让那些在轰炸中幸存下来的人挨饿。人们为了一包饼干而自相残杀。他们让巴勒斯坦人干渴难耐，直到他们崩溃并决定离开。但加沙被围困着。他们无法离开。他们被困住了。正在发生的既不是战争也不是自然灾害，而是种族灭绝。多年来持续的种族清洗已经变成了种族灭绝。
              </Text>

              <Text fontSize="md" mb={4}>
                我们不会让这种情况发生。
              </Text>

              <Text fontSize="md" mb={4}>
                2023年10月的袭击绝不能为数百名人道主义工作者、数百名记者、数千名医护人员和数万名儿童的死亡辩护。全世界都对这种盲目暴力的爆发感到震惊。历史并非始于10月7日：在上世纪80年代初，既没有真主党也没有哈马斯，但以色列已经在完全不受惩罚的情况下恐吓巴勒斯坦人民。而今天，孩子们每天都在没有麻醉的情况下被截肢，因为以色列士兵用狙击手射击他们取乐，然后在网络上吹嘘。
              </Text>

              <Text fontSize="md" mb={4}>
                我们不能说我们不知道。如果我们今天不采取行动，我们的孩子会说什么？巴勒斯坦已经生活在外国占领下一个世纪了。尽管有联合国决议、声明和各方的善意，但针对以色列采取的具有约束力的行动却很少。我们将为普遍的政治懦弱付出现金代价。
              </Text>

              <Text fontSize="md" mb={4}>
                殖民化必须结束。
              </Text>

              <Text fontSize="md" mb={4}>
                海牙集团是一个为协调针对巴勒斯坦违反国际法行为的法律、外交和经济措施而创建的国际联盟。该运动由8个国家发起，现在汇集了30个决心执行国际法的参与者。
              </Text>

              <Text fontSize="md" mb={4}>
                在波哥大会议上通过了六项具体措施来打破以色列的有罪不罚：对武器和军事装备的全面禁运，禁止运载军事物资到以色列的船只停靠，对悬挂国旗的船只进行系统性检查，审查与共犯企业的所有公共合同，对战争罪责任人发起国内司法程序，以及适用普遍管辖权原则，使罪犯受到审判和定罪。
              </Text>

              <Text fontSize="md" mb={4}>
                纳米比亚和马来西亚已经阻止运载武器到以色列的船只进入其港口。哥伦比亚已暂停出口并召回了驻以色列大使。玻利维亚也召回了其大使。我们呼吁世界各国加入海牙集团并立即实施这些决定性措施。他们有法律义务采取行动，我们要以最大的力量提醒他们：这是结束种族灭绝和占领的唯一途径。
              </Text>

              <Text fontSize="md" mb={4}>
                让我们努力理解彼此。这是每个人的关切。尽可能传播巴勒斯坦男女老少的声音。无论未来发生什么，我们都将帮助他们重建明天的巴勒斯坦。通过对话和互助，我们将让武器、谎言和愚蠢沉默。我们将执行法律，让巴勒斯坦得以生存。
              </Text>

              <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} mt={6}>
                发布于2025年8月6日，作者：
                <LinkComponent href="https://julienberanger.com/contact">贝于连</LinkComponent>
              </Text>
              <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                来源：{' '}
                <LinkComponent href="https://github.com/palestine-will-live/hands-off-palestine">
                  https://github.com/palestine-will-live/hands-off-palestine
                </LinkComponent>
              </Text>
              <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                许可证：{' '}
                <LinkComponent href="https://github.com/palestine-will-live/hands-off-palestine?tab=readme-ov-file#license">
                  CC BY-ND 4.0
                </LinkComponent>
              </Text>
            </Box>

            <br />
            <br />
          </VStack>
        </Container>
      </main>
    </>
  )
}
