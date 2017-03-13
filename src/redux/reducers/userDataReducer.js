let userDataReducer = (userData = {}, action) => {
    switch(action.type) {
        case 'UPDATE_BUDGET':
            return Object.assign({}, userData, {
                budget: action.val
            });

        case 'UPDATE_PACE':
            return Object.assign({}, userData, {
                pace: action.val
            });

        case 'TOGGLE_REFINEMENTS':

            function switchLiveMusic(name) {
                switch(name) {
                    case 'liveMusic':
                        return !userData.refinements.liveMusic;
                    default:
                        return userData.refinements.liveMusic;
                    }
                }
            function switchFamilyFriendly(name) {
                switch(name) {
                    case 'familyFriendly':
                        return !userData.refinements.familyFriendly;
                    default:
                        return userData.refinements.familyFriendly;
                    }
                }
            function switchVegetarian(name) {
                switch(name) {
                    case 'vegetarian':
                        return !userData.refinements.vegetarian;
                    default:
                        return userData.refinements.vegetarian;
                    }
                }
            function switchTours(name) {
                switch(name) {
                    case 'tours':
                        return !userData.refinements.tours;
                    default:
                        return userData.refinements.tours;
                    }
                }
            function switchCheapEats(name) {
                switch(name) {
                    case 'cheapEats':
                        return !userData.refinements.cheapEats;
                    default:
                        return userData.refinements.cheapEats;
                    }
                }
            function switchFoodie(name) {
                switch(name) {
                    case 'foodie':
                        return !userData.refinements.foodie;
                    default:
                        return userData.refinements.foodie;
                    }
                }
            function switchRomantic(name) {
                switch(name) {
                    case 'romantic':
                        return !userData.refinements.romantic;
                    default:
                        return userData.refinements.romantic;
                    }
                }

            return Object.assign({}, userData, {
                refinements: Object.assign({}, userData.refinements, {
                    liveMusic: switchLiveMusic(action.name),
                    familyFriendly: switchFamilyFriendly(action.name),
                    vegetarian: switchVegetarian(action.name),
                    tours: switchTours(action.name),
                    cheapEats: switchCheapEats(action.name),
                    foodie: switchFoodie(action.name),
                    romantic: switchRomantic(action.name)
                })
            })



        case 'TOGGLE_NIGHTLIFE_TYPES':

        function switchBarClubLounge(name) {
            switch(name) {
                case 'barClubLounge':
                    return !userData.nightlifeTypes.barClubLounge;
                default:
                    return userData.nightlifeTypes.barClubLounge;
                }
            }
        function switchSeeTheTown(name) {
            switch(name) {
                case 'seeTheTown':
                    return !userData.nightlifeTypes.seeTheTown;
                default:
                    return userData.nightlifeTypes.seeTheTown;
                }
            }
        function switchEventsEntertainment(name) {
            switch(name) {
                case 'eventsEntertainment':
                    return !userData.nightlifeTypes.eventsEntertainment;
                default:
                    return userData.nightlifeTypes.eventsEntertainment;
                }
            }
        function switchFamilyFriendlyOnly(name) {
            switch(name) {
                case 'familyFriendlyOnly':
                    return !userData.nightlifeTypes.familyFriendlyOnly;
                default:
                    return userData.nightlifeTypes.familyFriendlyOnly;
                }
            }

            return Object.assign({}, userData, {
                nightlifeTypes: Object.assign({}, {
                    barClubLounge: switchBarClubLounge(action.name),
                    seeTheTown: switchSeeTheTown(action.name),
                    eventsEntertainment: switchEventsEntertainment(action.name),
                    familyFriendlyOnly: switchFamilyFriendlyOnly(action.name)
            })
        })

        case 'PROFILE_SELECTED':
            switch(action.title) {
                case 'buildYourOwn':
                    return Object.assign({}, userData, {
                        profileTitle: 'buildYourOwn',
                        budget: "4",
                        pace: "6",
                        profileSettings: Object.assign({}, {
                            mustsee: Object.assign({}, {val: "2", message: 'Only the Best'}),
                            culture: Object.assign({}, {val: "2", message: 'Less is More'}),
                            cuisine: Object.assign({}, {val: "2", message: 'Food is Food'}),
                            adventure: Object.assign({}, {val: "2", message: 'Safety First'}),
                            art: Object.assign({}, {val: "2", message: 'Limited Interest'}),
                            entertainment: Object.assign({}, {val: "2", message: 'Only The Best'}),
                            hist: Object.assign({}, {val: "2", message: 'Limited Interest'}),
                            museums: Object.assign({}, {val: "2", message: 'Only the Best'}),
                            nature: Object.assign({}, {val: "2", message: 'Limited Interest'}),
                            rr: Object.assign({}, {val: "2", message: 'Limited Interest'}),
                            shopping: Object.assign({}, {val: "2", message: 'Souvernirs & Gifts'}),
                            sports: Object.assign({}, {val: "2", message: 'Limited Interest'}),
                        })
                    })
                case 'firstTimer':
                    return Object.assign({}, userData, {
                        profileTitle: 'firstTimer',
                        budget: 5,
                        pace: "6",
                        profileSettings: Object.assign({}, {
                            mustsee: Object.assign({}, {val: "9", message: 'See them All'}),
                            culture: Object.assign({}, {val: "7", message: 'Culture Connoisseur'}),
                            cuisine: Object.assign({}, {val: "5", message: 'Like to Eat'}),
                            adventure: Object.assign({}, {val: "2", message: 'Safety First'}),
                            art: Object.assign({}, {val: "5", message: "Art's Pretty Cool"}),
                            entertainment: Object.assign({}, {val: "2", message: 'Only the Best'}),
                            hist: Object.assign({}, {val: "5", message: "History's Cool"}),
                            museums: Object.assign({}, {val: "4", message: 'Enjoy Museums'}),
                            nature: Object.assign({}, {val: "2", message: 'Limited Interest'}),
                            rr: Object.assign({}, {val: "2", message: 'Limited Interest'}),
                            shopping: Object.assign({}, {val: "2", message: 'Souvernirs & Gifts'}),
                            sports: Object.assign({}, {val: "2", message: 'Limited Interest'}),
                        })
                    })
                case 'budget':
                    return Object.assign({}, userData, {
                        profileTitle: 'budget',
                        budget: "1",
                        pace: "6",
                        profileSettings: Object.assign({}, {
                            mustsee: Object.assign({}, {val: "9", message: 'See them All'}),
                            culture: Object.assign({}, {val: "8", message: 'Local Immersion'}),
                            cuisine: Object.assign({}, {val: "2", message: 'Food is Food'}),
                            adventure: Object.assign({}, {val: "6", message: 'Want Thrills'}),
                            art: Object.assign({}, {val: "2", message: 'Limited Interest'}),
                            entertainment: Object.assign({}, {val: "2", message: 'Only the Best'}),
                            hist: Object.assign({}, {val: "5", message: "History's Cool"}),
                            museums: Object.assign({}, {val: "2", message: 'Only the Best'}),
                            nature: Object.assign({}, {val: "5", message: 'Like the Outdoors'}),
                            rr: Object.assign({}, {val: "2", message: 'Limited Interest'}),
                            shopping: Object.assign({}, {val: "2", message: 'Souvernirs & Gifts'}),
                            sports: Object.assign({}, {val: "5", message: 'Like Sports'}),
                        })
                    })
                case 'returningTraveler':
                    return Object.assign({}, userData, {
                        profileTitle: 'returningTraveler',
                        budget: "4",
                        pace: "5",
                        profileSettings: Object.assign({}, {
                            mustsee: Object.assign({}, {val: "1", message: "I'm a Trailblazer"}),
                            culture: Object.assign({}, {val: "9", message: 'Local Immersion'}),
                            cuisine: Object.assign({}, {val: "7", message: 'Important to Me'}),
                            adventure: Object.assign({}, {val: "6", message: 'Want Thrills'}),
                            art: Object.assign({}, {val: "6", message: 'Important to Me'}),
                            entertainment: Object.assign({}, {val: "5", message: "I'm into Fun"}),
                            hist: Object.assign({}, {val: "5", message: "History's Cool"}),
                            museums: Object.assign({}, {val: "2", message: 'Only the Best'}),
                            nature: Object.assign({}, {val: "4", message: 'Like the Outdoors'}),
                            rr: Object.assign({}, {val: "2", message: 'Limited Interest'}),
                            shopping: Object.assign({}, {val: "3", message: 'Souvernirs & Gifts'}),
                            sports: Object.assign({}, {val: "2", message: 'Limited Interest'}),
                        })
                    })
                case 'teamPicks':
                    return Object.assign({}, userData, {
                        profileTitle: 'teamPicks',
                        budget: "4",
                        pace: "6",
                        profileSettings: Object.assign({}, {
                            mustsee: Object.assign({}, {val: "6", message: 'Must See Most'}),
                            culture: Object.assign({}, {val: "9", message: 'Local Immersion'}),
                            cuisine: Object.assign({}, {val: "6", message: 'Important to Me'}),
                            adventure: Object.assign({}, {val: "2", message: 'Safety First'}),
                            art: Object.assign({}, {val: "4", message: "Art's Pretty Cool"}),
                            entertainment: Object.assign({}, {val: "2", message: 'Only the Best'}),
                            hist: Object.assign({}, {val: "5", message: "History's Cool"}),
                            museums: Object.assign({}, {val: "4", message: 'Enjoy Museums'}),
                            nature: Object.assign({}, {val: "2", message: 'Limited Interest'}),
                            rr: Object.assign({}, {val: "5", message: 'Rest is Good'}),
                            shopping: Object.assign({}, {val: "3", message: 'Souvernirs & Gifts'}),
                            sports: Object.assign({}, {val: "4", message: 'Like Sports'}),
                        })
                    })
                case 'luxury':
                    return Object.assign({}, userData, {
                        profileTitle: 'luxury',
                        budget: "9",
                        pace: "5",
                        profileSettings: Object.assign({}, {
                            mustsee: Object.assign({}, {val: "5", message: 'Must See Some'}),
                            culture: Object.assign({}, {val: "9", message: 'Local Immersion'}),
                            cuisine: Object.assign({}, {val: "6", message: 'Important to Me'}),
                            adventure: Object.assign({}, {val: "2", message: 'Safety First'}),
                            art: Object.assign({}, {val: "5", message: "Art's Pretty Cool"}),
                            entertainment: Object.assign({}, {val: "2", message: 'Only the Best'}),
                            hist: Object.assign({}, {hist: "5", val: "History's Cool"}),
                            museums: Object.assign({}, {val: "2", message: 'Only the Best'}),
                            nature: Object.assign({}, {val: "2", message: 'Limited Interest'}),
                            rr: Object.assign({}, {val: "5", message: 'Rest is Good'}),
                            shopping: Object.assign({}, {val: "6", message: 'Love Shopping'}),
                            sports: Object.assign({}, {val: "2", message: 'Limited Interest'}),
                        })
                    })
                default:
                    return userData;
            }


        case 'UPDATE_PROFILE_SETTINGS':

            switch(action.name) {
                case 'mustsee':
                    return Object.assign({}, userData, {
                        profileSettings: Object.assign({}, userData.profileSettings, {
                            mustsee: Object.assign({}, {
                                val: action.val,
                                message: action.msg
                            })
                        })
                    });
                    break;
                case 'culture':
                    return Object.assign({}, userData, {
                        profileSettings: Object.assign({}, userData.profileSettings, {
                            culture: Object.assign({}, {
                                val: action.val,
                                message: action.msg
                            })
                        })
                    });
                    break;
                case 'cuisine':
                    return Object.assign({}, userData, {
                        profileSettings: Object.assign({}, userData.profileSettings, {
                            cuisine: Object.assign({}, {
                                val: action.val,
                                message: action.msg
                            })
                        })
                    });
                    break;
                case 'adventure':
                    return Object.assign({}, userData, {
                        profileSettings: Object.assign({}, userData.profileSettings, {
                            adventure: Object.assign({}, {
                                val: action.val,
                                message: action.msg
                            })
                        })
                    });
                    break;
                case 'art':
                    return Object.assign({}, userData, {
                        profileSettings: Object.assign({}, userData.profileSettings, {
                            art: Object.assign({}, {
                                val: action.val,
                                message: action.msg
                            })
                        })
                    });
                    break;
                case 'entertainment':
                    return Object.assign({}, userData, {
                        profileSettings: Object.assign({}, userData.profileSettings, {
                            entertainment: Object.assign({}, {
                                val: action.val,
                                message: action.msg
                            })
                        })
                    });
                    break;
                case 'hist':
                    return Object.assign({}, userData, {
                        profileSettings: Object.assign({}, userData.profileSettings, {
                            hist: Object.assign({}, {
                                val: action.val,
                                message: action.msg
                            })
                        })
                    });
                    break;
                case 'museums':
                    return Object.assign({}, userData, {
                        profileSettings: Object.assign({}, userData.profileSettings, {
                            museums: Object.assign({}, {
                                val: action.val,
                                message: action.msg
                            })
                        })
                    });
                    break;
                case 'nature':
                    return Object.assign({}, userData, {
                        profileSettings: Object.assign({}, userData.profileSettings, {
                            nature: Object.assign({}, {
                                val: action.val,
                                message: action.msg
                            })
                        })
                    });
                    break;
                case 'rr':
                    return Object.assign({}, userData, {
                        profileSettings: Object.assign({}, userData.profileSettings, {
                            rr: Object.assign({}, {
                                val: action.val,
                                message: action.msg
                            })
                        })
                    });
                    break;
                case 'shopping':
                    return Object.assign({}, userData, {
                        profileSettings: Object.assign({}, userData.profileSettings, {
                            shopping: Object.assign({}, {
                                val: action.val,
                                message: action.msg
                            })
                        })
                    });
                    break;
                case 'sports':
                    return Object.assign({}, userData, {
                        profileSettings: Object.assign({}, userData.profileSettings, {
                            sports: Object.assign({}, {
                                val: action.val,
                                message: action.msg
                            })
                        })
                    });
                    break;
                default:
                console.log("____________________________________________")
                    return userData;
                }
            default:
                return userData;
            }
        }

export default userDataReducer;
