import React from 'react';
import Theme from "../templates/Theme";
import {Container} from "react-bootstrap";

const Program = () => {
        return (
            <Theme title="Programmation" pathname='/programme' description="Le Griffon souhaite offrir sa programmation sur la base d’une subvention provenant de Patrimoine Canada et grâce à la participation de la communauté.">
                    <style>{`
                        main ol li { margin-bottom: 1em; }
                    `}</style>
                    <Container className="p-5">
                            <div>
                                    <h1>Programmation annuelle 2021-2022</h1>
                                    <p>Le Griffon souhaite offrir la programmation suivante sur la base d’une subvention provenant de Patrimoine Canada et grâce à la participation de la communauté :</p>
                                    <ol>
                                            <li>Organisation et animation d’une Cabane à Sucre pour les communautés francophones du Niagara.</li>
                                            <li>Réalisation de 3 soirées spectacles communautaires mettant en vedette des artistes locaux et professionnels.</li>
                                            <li>Réalisation de la cérémonie de reconnaissance des bénévoles qui ont contribué à l’essor de notre communauté en collaboration avec le Club de Bons vivants, les ainés de St. Catharines.</li>
                                            <li>Appuyer la communauté des nouveaux-arrivants dans la réalisation de spectacles musicaux conçus par des artistes émergents de tout âge en offrant le support et le matériel technique, la formation ainsi que l’appui professionnel.</li>
                                            <li>
                                                    Appui aux nouveaux-arrivants dans la réalisation des rencontres culturelles qui favorisent le rassemblement des gens et le lien avec la communauté franco-ontarienne.
                                                    <ol type="a" style={{marginTop:"1em"}}>
                                                            <li>Fête des mères et bazaar annuel au mois de mai</li>
                                                            <li>Semaine de l’immigration francophone</li>
                                                            <li>Soirée tropicale au mois d’août</li>
                                                            <li>Journée internationale de la femme en mars</li>
                                                            <li>Réveillon de Noel</li>
                                                            <li>Célébration de l’histoire du mois des noirs</li>
                                                            <li>Journée internationale de la femme</li>
                                                            <li>Porte ouverte africaine caribéenne</li>
                                                            <li>Salon du livre</li>
                                                    </ol>
                                            </li>
                                            <li>Offrir de la formation aux adolescents de 10 à 20 ans en technique de son,  en tournage et en édition vidéo, en animation de soirées variées, en réalisation de spectacles, en préparation de répertoire de musique, en accueil d’une foule, en service de table, en préparation de la nourriture et en montage de décors pour des événements variés</li>
                                            <li>Impliquer les artistes de la région dans la réalisation des soirées communautaires. Fournir les cachets monétaires aux artistes locaux lors des activités culturels et communautaires.</li>
                                            <li>Formation aux adolescents pour développer les compétences nécessaires à la  fonction de maître ou de maîtresse de cérémonie.</li>
                                            <li>Animation du couronnement de la reine des francophones dans le cadre du Folk Arts Festival de Niagara.</li>
                                            <li>Animation d’une soirée francophone dans le cadre du festival des arts populaires ; accompagnement du centre des arts populaires de St. Catharines dans la célébration de la francophonie lors des événements multiculturelles annuels</li>
                                            <li>Animation de la levée du drapeau franco-ontarien à l’Hôtel de ville.</li>
                                            <li>Réalisation du déjeuner de la francophonie lors de la semaine de la francophonie.</li>
                                            <li>Appui à la communauté immigrante dans la réalisation d’une porte ouverte africaine-caribéenne dans le cadre du Folk Arts Festival</li>
                                            <li>Appui à la communauté immigrante dans la réalisation du Gala Festev’Ebene dans de la célébration du mois des noirs.</li>
                                            <li>Animation et support technique lors de la fête de la  St. Jean; réalisation d’une journée familiale;</li>
                                            <li>Accompagnement de l’organisation de la Fête des Acadiens et appui à la réalisation d’un spectacle francophone;</li>
                                            <li>Animation du «Noël des petits» à St. Catharines au mois de décembre.</li>
                                            <li>Montage d’un char allégorique qui fait la promotion de l’héritage franco-ontarien lors de la Grande parade du Niagara Wine Festival</li>
                                            <li>Appui aux organismes locaux dans la réalisation de leurs activités communautaires en impliquant les élèves d’âge scolaire.  Formation à la technique de son, à l’animation, au service de table, à la préparation des repas, au montage des mises en scène et à la technique de son.</li>
                                            <li>Appui au groupe théâtre jeunesse dans la création et la présentation d’une pièce de théâtre</li>
                                    </ol>
                            </div>
                    </Container>
            </Theme>
        )
}

export default Program