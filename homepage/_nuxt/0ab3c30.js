(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        134: function (t, o, e) {
            "use strict";
            e.r(o);
            var r = e(0),
                n = {
                    props: {
                        site: {},
                    },
                    name: "Footer",
                    data: function () {
                        return {
                            account: null,
                        };
                    },
                    methods: {
                        logout: function () {
                            var t = this;
                            this.$auth.logout().then(function () {
                                t.$router.push("/"),
                                    t.$bvToast.toast(
                                        "ไว้กลับมาใช้บริการใหม่น้า!",
                                        Object(r.a)(
                                            {
                                                title: "ออกจากระบบ",
                                                variant: "default",
                                                solid: !0,
                                                autoHideDelay: 1e3,
                                            },
                                            "autoHideDelay",
                                            1e3
                                        )
                                    );
                            });
                        },
                    },
                },
                l = e(40),
                component = Object(l.a)(
                    n,
                    function () {
                        var t = this,
                            o = t._self._c;
                        return o("b-container", [
                            o(
                                "footer",
                                {
                                    attrs: {
                                        id: "footer",
                                    },
                                },
                                [
                                    o(
                                        "b-row",
                                        [
                                            o(
                                                "b-col",
                                                {
                                                    attrs: {
                                                        cols: "12",
                                                        xl: "6",
                                                    },
                                                },
                                                [
                                                    o(
                                                        "b-row",
                                                        [
                                                            o(
                                                                "b-col",
                                                                {
                                                                    attrs: {
                                                                        cols: "3",
                                                                        xl: "2",
                                                                    },
                                                                },
                                                                [
                                                                    o("b-img", {
                                                                        staticClass: "ml-4",
                                                                        attrs: {
                                                                            src: "".concat(t.site.site_logo),
                                                                            alt: "Logo",
                                                                            width: "65",
                                                                        },
                                                                    }),
                                                                ],
                                                                1
                                                            ),
                                                            t._v(" "),
                                                            o(
                                                                "b-col",
                                                                {
                                                                    staticClass: "mt-xl-3",
                                                                    attrs: {
                                                                        xl: "4",
                                                                        cols: "6",
                                                                    },
                                                                },
                                                                [
                                                                    o(
                                                                        "div",
                                                                        {
                                                                            staticClass: "text-display pl-2",
                                                                        },
                                                                        [o("h5", [t._v(t._s(t.site.site_title))]), t._v(" "), o("span", [t._v(t._s(t.site.site_short_description))])]
                                                                    ),
                                                                ]
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                    t._v(" "),
                                                    o(
                                                        "p",
                                                        {
                                                            staticClass: "mt-xl-2 mt-4",
                                                        },
                                                        [t._v(t._s(t.site.site_description))]
                                                    ),
                                                ],
                                                1
                                            ),
                                            t._v(" "),
                                            o(
                                                "b-col",
                                                {
                                                    attrs: {
                                                        cols: "6",
                                                        xl: "3",
                                                    },
                                                },
                                                [
                                                    o("h5", [t._v("หมวดหมู่")]),
                                                    t._v(" "),
                                                    o(
                                                        "li",
                                                        [
                                                            o(
                                                                "NuxtLink",
                                                                {
                                                                    attrs: {
                                                                        to: "/store",
                                                                    },
                                                                },
                                                                [t._v("Synapse X")]
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                    t._v(" "),
                                                    o(
                                                        "li",
                                                        [
                                                            o(
                                                                "NuxtLink",
                                                                {
                                                                    attrs: {
                                                                        to: "/store",
                                                                    },
                                                                },
                                                                [t._v("Project Slayer")]
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                    t._v(" "),
                                                    o(
                                                        "li",
                                                        [
                                                            o(
                                                                "NuxtLink",
                                                                {
                                                                    attrs: {
                                                                        to: "/store",
                                                                    },
                                                                },
                                                                [t._v("Grand Piece")]
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                    t._v(" "),
                                                    o(
                                                        "li",
                                                        [
                                                            o(
                                                                "NuxtLink",
                                                                {
                                                                    attrs: {
                                                                        to: "/store",
                                                                    },
                                                                },
                                                                [t._v("Blox Fruit")]
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                ]
                                            ),
                                            t._v(" "),
                                            o(
                                                "b-col",
                                                {
                                                    attrs: {
                                                        cols: "6",
                                                        xl: "3",
                                                    },
                                                },
                                                [
                                                    o("h5", [t._v("ช่องทางต่างๆ")]),
                                                    t._v(" "),
                                                    o("li", [
                                                        o(
                                                            "a",
                                                            {
                                                                attrs: {
                                                                    href: "".concat(t.site.tiktok_channel),
                                                                },
                                                            },
                                                            [t._v("Tiktok")]
                                                        ),
                                                    ]),
                                                    t._v(" "),
                                                    o("li", [
                                                        o(
                                                            "a",
                                                            {
                                                                attrs: {
                                                                    href: "".concat(t.site.facebook_page),
                                                                },
                                                            },
                                                            [t._v("Facebook")]
                                                        ),
                                                    ]),
                                                    t._v(" "),
                                                    o("li", [
                                                        o(
                                                            "a",
                                                            {
                                                                attrs: {
                                                                    href: "".concat(t.site.youtube_channel),
                                                                },
                                                            },
                                                            [t._v("Youtube")]
                                                        ),
                                                    ]),
                                                    t._v(" "),
                                                    o("li", [
                                                        o(
                                                            "a",
                                                            {
                                                                attrs: {
                                                                    href: "".concat(t.site.discord_invite),
                                                                },
                                                            },
                                                            [t._v("Discord")]
                                                        ),
                                                    ]),
                                                ]
                                            ),
                                        ],
                                        1
                                    ),
                                    t._v(" "),
                                    o("hr", {
                                        staticClass: "divide-hr",
                                    }),
                                    t._v(" "),
                                    o(
                                        "b-row",
                                        [
                                            o(
                                                "b-col",
                                                {
                                                    attrs: {
                                                        cols: "12",
                                                        xl: "6",
                                                    },
                                                },
                                                [o("p", [t._v("Copyright © 2022 XENON - HUB. All Rights Reserved.")])]
                                            ),
                                            t._v(" "),
                                            o(
                                                "b-col",
                                                {
                                                    staticClass: "text-right",
                                                    attrs: {
                                                        xl: "6",
                                                        cols: "12",
                                                    },
                                                },
                                                [
                                                    o("b-img", {
                                                        attrs: {
                                                            src: "/assets/images/truewallet.png",
                                                            height: "30",
                                                        },
                                                    }),
                                                ],
                                                1
                                            ),
                                        ],
                                        1
                                    ),
                                ],
                                1
                            ),
                        ]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            o.default = component.exports;
            installComponents(component, {
                Footer: e(134).default,
            });
        },
        140: function (t, o, e) {
            "use strict";
            e.r(o);
            e(117);
            var r = e(30),
                n =
                    (e(65),
                    e(37),
                    {
                        props: {
                            site: {},
                        },
                        name: "Navbar",
                        data: function () {
                            return {
                                account: null,
                                username: null,
                                email: null,
                                password: null,
                                passwordConfirm: null,
                                disabled: !1,
                            };
                        },
                        methods: {
                            logout: function () {
                                var t = this;
                                this.$auth.logout().then(function () {
                                    t.$axios.$post("auth/logout", {}).then(function () {
                                        t.$router.push("/"),
                                            t.$bvToast.toast("ไว้กลับมาใช้บริการใหม่น้า!", {
                                                title: "ออกจากระบบ",
                                                variant: "default",
                                                solid: !0,
                                                autoHideDelay: 1e3,
                                            });
                                    });
                                });
                            },
                            login: function () {
                                var t = this;
                                this.disabled = !0;
                                var o = {
                                    data: {
                                        account: this.account,
                                        password: this.password,
                                    },
                                };
                                this.$auth
                                    .loginWith("local", o)
                                    .then(function () {
                                        t.$router.push("/"),
                                            t.$bvModal.hide("login-modal"),
                                            t.$bvToast.toast("ยินดีต้อนรับ สำหรับการกลับมา!", {
                                                title: "เข้าสู่ระบบสำเร็จแล้ว",
                                                variant: "default",
                                                solid: !0,
                                                autoHideDelay: 1e3,
                                            }),
                                            (t.account = null),
                                            (t.username = null),
                                            (t.email = null),
                                            (t.password = null),
                                            (t.passwordConfirm = null),
                                            (t.disabled = !1);
                                    })
                                    .catch(function (o) {
                                        (t.disabled = !1),
                                            t.$bvToast.toast(o.response.data.message, {
                                                title: "เกิดข้อผิดพลาด",
                                                variant: "danger",
                                                solid: !0,
                                                autoHideDelay: 1e3,
                                            });
                                    });
                            },
                            register: function () {
                                var t = this;
                                return Object(r.a)(
                                    regeneratorRuntime.mark(function o() {
                                        return regeneratorRuntime.wrap(function (o) {
                                            for (;;)
                                                switch ((o.prev = o.next)) {
                                                    case 0:
                                                        (t.disabled = !0),
                                                            t.$recaptcha
                                                                .getResponse()
                                                                .then(function (o) {
                                                                    var e = {
                                                                        username: t.username,
                                                                        email: t.email,
                                                                        password: t.password,
                                                                        passwordConfirm: t.passwordConfirm,
                                                                        recaptcha: o,
                                                                    };
                                                                    t.$axios
                                                                        .$post("auth/register", e)
                                                                        .then(function () {
                                                                            t.$router.push("/"),
                                                                                t.$bvModal.hide("register-modal"),
                                                                                t.$bvModal.show("login-modal"),
                                                                                t.$bvToast.toast("สมัครสมาชิกสำเร็จ!", {
                                                                                    title: "สำเร็จ",
                                                                                    variant: "default",
                                                                                    solid: !0,
                                                                                    autoHideDelay: 1e3,
                                                                                }),
                                                                                (t.account = null),
                                                                                (t.username = null),
                                                                                (t.email = null),
                                                                                (t.password = null),
                                                                                (t.passwordConfirm = null),
                                                                                (t.disabled = !1);
                                                                        })
                                                                        .catch(function (o) {
                                                                            (t.disabled = !1),
                                                                                t.$bvToast.toast(o.response.data.message, {
                                                                                    title: "เกิดข้อผิดพลาด",
                                                                                    variant: "danger",
                                                                                    solid: !0,
                                                                                    autoHideDelay: 1e3,
                                                                                });
                                                                        }),
                                                                        setTimeout(function () {
                                                                            t.$recaptcha.reset();
                                                                        }, 1e3);
                                                                })
                                                                .catch(function () {
                                                                    (t.disabled = !1),
                                                                        t.$bvToast.toast("กรุณายืนยันตัวตนว่าคุณไม่ใช่บอท!", {
                                                                            title: "เกิดข้อผิดพลาด",
                                                                            variant: "danger",
                                                                            solid: !0,
                                                                            autoHideDelay: 1e3,
                                                                        });
                                                                });
                                                    case 2:
                                                    case "end":
                                                        return o.stop();
                                                }
                                        }, o);
                                    })
                                )();
                            },
                        },
                    }),
                l = e(40),
                component = Object(l.a)(
                    n,
                    function () {
                        var t = this,
                            o = t._self._c;
                        return o(
                            "div",
                            [
                                o("video", {
                                    attrs: {
                                        src: "".concat(t.site.site_background),
                                        autoplay: "",
                                        loop: "",
                                        playsinline: "",
                                        audioTracks: "",
                                        volume: "0.5",
                                        muted: "",
                                    },
                                    domProps: {
                                        muted: !0,
                                    },
                                }),
                                t._v(" "),
                                o(
                                    "b-navbar",
                                    {
                                        staticClass: "py-2 px-4 bg-navbar",
                                        attrs: {
                                            toggleable: "lg",
                                            type: "dark",
                                            fixed: "top",
                                        },
                                    },
                                    [
                                        o(
                                            "NuxtLink",
                                            {
                                                staticClass: "navbar-brand",
                                                attrs: {
                                                    to: "/",
                                                },
                                            },
                                            [
                                                o(
                                                    "b-row",
                                                    [
                                                        o(
                                                            "b-col",
                                                            {
                                                                attrs: {
                                                                    cols: "5",
                                                                },
                                                            },
                                                            [
                                                                o("b-img", {
                                                                    staticClass: "ml-4",
                                                                    attrs: {
                                                                        src: "".concat(t.site.site_logo),
                                                                        alt: "Logo",
                                                                        width: "70",
                                                                        height: "70",
                                                                    },
                                                                }),
                                                            ],
                                                            1
                                                        ),
                                                        t._v(" "),
                                                        o(
                                                            "b-col",
                                                            {
                                                                staticClass: "mt-3",
                                                                attrs: {
                                                                    cols: "7",
                                                                },
                                                            },
                                                            [
                                                                o(
                                                                    "div",
                                                                    {
                                                                        staticClass: "text-display pl-2",
                                                                    },
                                                                    [o("h5", [t._v(t._s(t.site.site_title))]), t._v(" "), o("span", [t._v(t._s(t.site.site_short_description))])]
                                                                ),
                                                            ]
                                                        ),
                                                    ],
                                                    1
                                                ),
                                            ],
                                            1
                                        ),
                                        t._v(" "),
                                        o("b-navbar-toggle", {
                                            attrs: {
                                                target: "nav-collapse",
                                            },
                                        }),
                                        t._v(" "),
                                        o(
                                            "b-collapse",
                                            {
                                                attrs: {
                                                    id: "nav-collapse",
                                                    "is-nav": "",
                                                },
                                            },
                                            [
                                                o(
                                                    "b-navbar-nav",
                                                    {
                                                        staticClass: "ml-5",
                                                    },
                                                    [
                                                        o(
                                                            "NuxtLink",
                                                            {
                                                                staticClass: "nav-link mx-3",
                                                                attrs: {
                                                                    to: "/",
                                                                },
                                                            },
                                                            [t._v("Home")]
                                                        ),
                                                        t._v(" "),
                                                        o(
                                                            "NuxtLink",
                                                            {
                                                                staticClass: "nav-link mx-3",
                                                                attrs: {
                                                                    to: "/store",
                                                                },
                                                            },
                                                            [t._v("Store")]
                                                        ),
                                                        t._v(" "),
                                                        o(
                                                            "NuxtLink",
                                                            {
                                                                class: "nav-link mx-3".concat(t.$auth.loggedIn ? "" : " d-none"),
                                                                attrs: {
                                                                    to: "/account/payment",
                                                                },
                                                            },
                                                            [t._v("Topup")]
                                                        ),
                                                        t._v(" "),
                                                        o(
                                                            "NuxtLink",
                                                            {
                                                                class: "nav-link mx-3".concat(t.$auth.loggedIn ? "" : " d-none"),
                                                                attrs: {
                                                                    to: "/account/history",
                                                                },
                                                            },
                                                            [t._v("History")]
                                                        ),
                                                        t._v(" "),
                                                        o(
                                                            "a",
                                                            {
                                                                staticClass: "nav-link mx-3",
                                                                attrs: {
                                                                    href: "".concat(t.site.how_to_use),
                                                                },
                                                            },
                                                            [t._v("How to")]
                                                        ),
                                                    ],
                                                    1
                                                ),
                                                t._v(" "),
                                                o(
                                                    "b-navbar-nav",
                                                    {
                                                        staticClass: "ml-auto",
                                                    },
                                                    [
                                                        t.$auth.loggedIn
                                                            ? t._e()
                                                            : o(
                                                                  "div",
                                                                  [
                                                                      o(
                                                                          "b-button",
                                                                          {
                                                                              directives: [
                                                                                  {
                                                                                      name: "b-modal",
                                                                                      rawName: "v-b-modal.login-modal",
                                                                                      modifiers: {
                                                                                          "login-modal": !0,
                                                                                      },
                                                                                  },
                                                                              ],
                                                                              staticClass: "btn-auth px-4",
                                                                          },
                                                                          [t._v("Login")]
                                                                      ),
                                                                      t._v(" "),
                                                                      o(
                                                                          "b-button",
                                                                          {
                                                                              directives: [
                                                                                  {
                                                                                      name: "b-modal",
                                                                                      rawName: "v-b-modal.register-modal",
                                                                                      modifiers: {
                                                                                          "register-modal": !0,
                                                                                      },
                                                                                  },
                                                                              ],
                                                                              staticClass: "btn-submit px-4",
                                                                          },
                                                                          [t._v("Register")]
                                                                      ),
                                                                  ],
                                                                  1
                                                              ),
                                                        t._v(" "),
                                                        t.$auth.loggedIn
                                                            ? o(
                                                                  "div",
                                                                  [
                                                                      o(
                                                                          "b-row",
                                                                          {
                                                                              staticClass: "mt-2 justify-content-center",
                                                                          },
                                                                          [
                                                                              "none" !== t.$auth.user.avatar
                                                                                  ? o("b-img", {
                                                                                        staticStyle: {
                                                                                            "margin-right": "0.5rem",
                                                                                        },
                                                                                        attrs: {
                                                                                            src: "".concat(t.$auth.user.avatar),
                                                                                            rounded: "circle",
                                                                                            alt: "".concat(t.$auth.user.nickname),
                                                                                            width: "45px",
                                                                                            height: "45px",
                                                                                        },
                                                                                    })
                                                                                  : t._e(),
                                                                              t._v(" "),
                                                                              o(
                                                                                  "b-nav-item-dropdown",
                                                                                  {
                                                                                      attrs: {
                                                                                          text: "".concat(t.$auth.user.nickname),
                                                                                          right: "",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                      o("b-dropdown-item", [
                                                                                          t._v("เครดิต: " + t._s(t.$auth.user.credit.toFixed(2)) + "\n                "),
                                                                                          o(
                                                                                              "svg",
                                                                                              {
                                                                                                  staticClass: "bi bi-coin",
                                                                                                  attrs: {
                                                                                                      xmlns: "http://www.w3.org/2000/svg",
                                                                                                      width: "16",
                                                                                                      height: "16",
                                                                                                      fill: "currentColor",
                                                                                                      viewBox: "0 0 16 16",
                                                                                                  },
                                                                                              },
                                                                                              [
                                                                                                  o("path", {
                                                                                                      attrs: {
                                                                                                          d:
                                                                                                              "M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z",
                                                                                                      },
                                                                                                  }),
                                                                                                  t._v(" "),
                                                                                                  o("path", {
                                                                                                      attrs: {
                                                                                                          d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z",
                                                                                                      },
                                                                                                  }),
                                                                                                  t._v(" "),
                                                                                                  o("path", {
                                                                                                      attrs: {
                                                                                                          d: "M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z",
                                                                                                      },
                                                                                                  }),
                                                                                              ]
                                                                                          ),
                                                                                      ]),
                                                                                      t._v(" "),
                                                                                      o("b-dropdown-item", [
                                                                                          t._v("แต้มสะสม: " + t._s(t.$auth.user.reward.toFixed(2)) + "\n                "),
                                                                                          o(
                                                                                              "svg",
                                                                                              {
                                                                                                  staticClass: "bi bi-hearts",
                                                                                                  attrs: {
                                                                                                      xmlns: "http://www.w3.org/2000/svg",
                                                                                                      width: "16",
                                                                                                      height: "16",
                                                                                                      fill: "currentColor",
                                                                                                      viewBox: "0 0 16 16",
                                                                                                  },
                                                                                              },
                                                                                              [
                                                                                                  o("path", {
                                                                                                      attrs: {
                                                                                                          "fill-rule": "evenodd",
                                                                                                          d:
                                                                                                              "M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015Zm6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343ZM7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358Z",
                                                                                                      },
                                                                                                  }),
                                                                                              ]
                                                                                          ),
                                                                                      ]),
                                                                                      t._v(" "),
                                                                                      o("div", {
                                                                                          staticClass: "dropdown-divider",
                                                                                      }),
                                                                                      t._v(" "),
                                                                                      o(
                                                                                          "NuxtLink",
                                                                                          {
                                                                                              staticClass: "dropdown-item",
                                                                                              attrs: {
                                                                                                  to: "/account",
                                                                                              },
                                                                                          },
                                                                                          [t._v("ตั้งค่าโปรไฟล์")]
                                                                                      ),
                                                                                      t._v(" "),
                                                                                      o(
                                                                                          "NuxtLink",
                                                                                          {
                                                                                              staticClass: "dropdown-item",
                                                                                              attrs: {
                                                                                                  to: "/account/history",
                                                                                              },
                                                                                          },
                                                                                          [t._v("ประวัติของคุณ")]
                                                                                      ),
                                                                                      t._v(" "),
                                                                                      o("div", {
                                                                                          staticClass: "dropdown-divider",
                                                                                      }),
                                                                                      t._v(" "),
                                                                                      "superadmin" === t.$auth.user.role || "admin" === t.$auth.user.role
                                                                                          ? o(
                                                                                                "div",
                                                                                                {
                                                                                                    attrs: {
                                                                                                        id: "admin-navbar-section",
                                                                                                    },
                                                                                                },
                                                                                                [
                                                                                                    o(
                                                                                                        "NuxtLink",
                                                                                                        {
                                                                                                            staticClass: "dropdown-item",
                                                                                                            attrs: {
                                                                                                                to: "/adminisverysecretlyformeasfuckdatalowclass",
                                                                                                            },
                                                                                                        },
                                                                                                        [t._v("จัดการหน้าแอดมิน")]
                                                                                                    ),
                                                                                                ],
                                                                                                1
                                                                                            )
                                                                                          : t._e(),
                                                                                      t._v(" "),
                                                                                      o("div", {
                                                                                          staticClass: "dropdown-divider",
                                                                                      }),
                                                                                      t._v(" "),
                                                                                      o(
                                                                                          "b-button",
                                                                                          {
                                                                                              staticClass: "dropdown-item",
                                                                                              on: {
                                                                                                  click: t.logout,
                                                                                              },
                                                                                          },
                                                                                          [t._v("ออกจากระบบ")]
                                                                                      ),
                                                                                      t._v(" "),
                                                                                      o("div", {
                                                                                          staticClass: "dropdown-divider",
                                                                                      }),
                                                                                  ],
                                                                                  1
                                                                              ),
                                                                          ],
                                                                          1
                                                                      ),
                                                                  ],
                                                                  1
                                                              )
                                                            : t._e(),
                                                    ]
                                                ),
                                            ],
                                            1
                                        ),
                                    ],
                                    1
                                ),
                                t._v(" "),
                                o(
                                    "b-modal",
                                    {
                                        attrs: {
                                            id: "login-modal",
                                            title: "modal",
                                            "footer-class": "d-none",
                                            "header-class": "d-none",
                                            centered: "",
                                        },
                                    },
                                    [
                                        o(
                                            "b-container",
                                            {
                                                staticClass: "mt-4",
                                            },
                                            [
                                                o(
                                                    "span",
                                                    {
                                                        staticClass: "text-center active",
                                                        attrs: {
                                                            id: "login-text",
                                                        },
                                                    },
                                                    [t._v("Login")]
                                                ),
                                                t._v(" "),
                                                o(
                                                    "span",
                                                    {
                                                        staticClass: "text-center",
                                                        attrs: {
                                                            id: "register-text",
                                                        },
                                                    },
                                                    [t._v("Register")]
                                                ),
                                                t._v(" "),
                                                o("hr", {
                                                    staticClass: "custom-line",
                                                }),
                                                t._v(" "),
                                                o(
                                                    "form",
                                                    {
                                                        on: {
                                                            submit: function (o) {
                                                                return o.preventDefault(), t.login.apply(null, arguments);
                                                            },
                                                        },
                                                    },
                                                    [
                                                        o(
                                                            "label",
                                                            {
                                                                staticClass: "mt-2 mb-2 text-white",
                                                                attrs: {
                                                                    for: "account",
                                                                },
                                                            },
                                                            [t._v("ชื่อผู้ใช้")]
                                                        ),
                                                        t._v(" "),
                                                        o("b-form-input", {
                                                            attrs: {
                                                                type: "text",
                                                                placeholder: "Username",
                                                                required: "",
                                                            },
                                                            model: {
                                                                value: t.account,
                                                                callback: function (o) {
                                                                    t.account = o;
                                                                },
                                                                expression: "account",
                                                            },
                                                        }),
                                                        t._v(" "),
                                                        o(
                                                            "label",
                                                            {
                                                                staticClass: "mt-2 mb-2 text-white",
                                                                attrs: {
                                                                    for: "password",
                                                                },
                                                            },
                                                            [t._v("รหัสผ่าน")]
                                                        ),
                                                        t._v(" "),
                                                        o("b-form-input", {
                                                            attrs: {
                                                                type: "password",
                                                                placeholder: "Password",
                                                                required: "",
                                                            },
                                                            model: {
                                                                value: t.password,
                                                                callback: function (o) {
                                                                    t.password = o;
                                                                },
                                                                expression: "password",
                                                            },
                                                        }),
                                                        t._v(" "),
                                                        o(
                                                            "b-button",
                                                            {
                                                                staticClass: "btn-submit w-100 mt-4",
                                                                attrs: {
                                                                    disabled: 1 == t.disabled,
                                                                    type: "submit",
                                                                },
                                                            },
                                                            [t._v("เข้าสู่ระบบ")]
                                                        ),
                                                    ],
                                                    1
                                                ),
                                                t._v(" "),
                                                o(
                                                    "a",
                                                    {
                                                        attrs: {
                                                            href: "".concat(this.$config.API_URL, "auth/discord/login"),
                                                        },
                                                    },
                                                    [
                                                        o(
                                                            "b-button",
                                                            {
                                                                staticClass: "btn-discord w-100 mt-2",
                                                            },
                                                            [
                                                                o(
                                                                    "svg",
                                                                    {
                                                                        staticClass: "bi bi-discord",
                                                                        attrs: {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "20",
                                                                            height: "20",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 16 16",
                                                                        },
                                                                    },
                                                                    [
                                                                        o("path", {
                                                                            attrs: {
                                                                                d:
                                                                                    "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z",
                                                                            },
                                                                        }),
                                                                    ]
                                                                ),
                                                                t._v("\n           เข้าสู่ระบบด้วยดิสคอร์ด"),
                                                            ]
                                                        ),
                                                    ],
                                                    1
                                                ),
                                                t._v(" "),
                                                o(
                                                    "span",
                                                    {
                                                        staticClass: "float-right mt-4 mb-3",
                                                    },
                                                    [
                                                        o(
                                                            "a",
                                                            {
                                                                staticClass: "text-white",
                                                                attrs: {
                                                                    type: "button",
                                                                },
                                                                on: {
                                                                    click: function (o) {
                                                                        t.$bvModal.hide("login-modal"), t.$bvModal.show("register-modal");
                                                                    },
                                                                },
                                                            },
                                                            [t._v("ยังไม่มีบัญชีผู้ใช้? สมัครบัญชีเลย!\n        ")]
                                                        ),
                                                    ]
                                                ),
                                            ]
                                        ),
                                    ],
                                    1
                                ),
                                t._v(" "),
                                o(
                                    "b-modal",
                                    {
                                        attrs: {
                                            id: "register-modal",
                                            title: "modal",
                                            "footer-class": "d-none",
                                            "header-class": "d-none",
                                            centered: "",
                                        },
                                    },
                                    [
                                        o(
                                            "b-container",
                                            {
                                                staticClass: "mt-4",
                                            },
                                            [
                                                o(
                                                    "span",
                                                    {
                                                        staticClass: "text-center",
                                                        attrs: {
                                                            id: "login-text",
                                                        },
                                                    },
                                                    [t._v("Login")]
                                                ),
                                                t._v(" "),
                                                o(
                                                    "span",
                                                    {
                                                        staticClass: "text-center active",
                                                        attrs: {
                                                            id: "register-text",
                                                        },
                                                    },
                                                    [t._v("Register")]
                                                ),
                                                t._v(" "),
                                                o("hr", {
                                                    staticClass: "custom-line",
                                                }),
                                                t._v(" "),
                                                o(
                                                    "form",
                                                    {
                                                        on: {
                                                            submit: function (o) {
                                                                return o.preventDefault(), t.register.apply(null, arguments);
                                                            },
                                                        },
                                                    },
                                                    [
                                                        o(
                                                            "label",
                                                            {
                                                                staticClass: "mt-2 mb-2 text-white",
                                                                attrs: {
                                                                    for: "username",
                                                                },
                                                            },
                                                            [t._v("ชื่อผู้ใช้")]
                                                        ),
                                                        t._v(" "),
                                                        o("b-form-input", {
                                                            attrs: {
                                                                type: "text",
                                                                placeholder: "Username",
                                                                required: "",
                                                            },
                                                            model: {
                                                                value: t.username,
                                                                callback: function (o) {
                                                                    t.username = o;
                                                                },
                                                                expression: "username",
                                                            },
                                                        }),
                                                        t._v(" "),
                                                        o(
                                                            "label",
                                                            {
                                                                staticClass: "mt-2 mb-2 text-white",
                                                                attrs: {
                                                                    for: "email",
                                                                },
                                                            },
                                                            [t._v("อีเมลล์")]
                                                        ),
                                                        t._v(" "),
                                                        o("b-form-input", {
                                                            attrs: {
                                                                type: "email",
                                                                placeholder: "Email",
                                                                require: "",
                                                            },
                                                            model: {
                                                                value: t.email,
                                                                callback: function (o) {
                                                                    t.email = o;
                                                                },
                                                                expression: "email",
                                                            },
                                                        }),
                                                        t._v(" "),
                                                        o(
                                                            "label",
                                                            {
                                                                staticClass: "mt-2 mb-2 text-white",
                                                                attrs: {
                                                                    for: "password",
                                                                },
                                                            },
                                                            [t._v("รหัสผ่าน")]
                                                        ),
                                                        t._v(" "),
                                                        o("b-form-input", {
                                                            attrs: {
                                                                type: "password",
                                                                placeholder: "Password",
                                                                require: "",
                                                            },
                                                            model: {
                                                                value: t.password,
                                                                callback: function (o) {
                                                                    t.password = o;
                                                                },
                                                                expression: "password",
                                                            },
                                                        }),
                                                        t._v(" "),
                                                        o(
                                                            "label",
                                                            {
                                                                staticClass: "mt-2 mb-2 text-white",
                                                                attrs: {
                                                                    for: "confirm_password",
                                                                },
                                                            },
                                                            [t._v("ยืนยันรหัสผ่าน")]
                                                        ),
                                                        t._v(" "),
                                                        o("b-form-input", {
                                                            attrs: {
                                                                type: "password",
                                                                placeholder: "Confirm Password",
                                                                require: "",
                                                            },
                                                            model: {
                                                                value: t.passwordConfirm,
                                                                callback: function (o) {
                                                                    t.passwordConfirm = o;
                                                                },
                                                                expression: "passwordConfirm",
                                                            },
                                                        }),
                                                        t._v(" "),
                                                        o(
                                                            "b-row",
                                                            {
                                                                staticClass: "justify-content-center mt-4",
                                                            },
                                                            [
                                                                o("recaptcha", {
                                                                    attrs: {
                                                                        required: "",
                                                                    },
                                                                }),
                                                            ],
                                                            1
                                                        ),
                                                        t._v(" "),
                                                        o(
                                                            "b-button",
                                                            {
                                                                staticClass: "btn-submit w-100 mt-4",
                                                                attrs: {
                                                                    disabled: 1 == t.disabled,
                                                                    type: "submit",
                                                                },
                                                            },
                                                            [t._v("สมัครสมาชิก")]
                                                        ),
                                                    ],
                                                    1
                                                ),
                                                t._v(" "),
                                                o(
                                                    "a",
                                                    {
                                                        attrs: {
                                                            href: "".concat(this.$config.API_URL, "auth/discord/login"),
                                                        },
                                                    },
                                                    [
                                                        o(
                                                            "b-button",
                                                            {
                                                                staticClass: "btn-discord w-100 mt-2",
                                                            },
                                                            [
                                                                o(
                                                                    "svg",
                                                                    {
                                                                        staticClass: "bi bi-discord",
                                                                        attrs: {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "20",
                                                                            height: "20",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 16 16",
                                                                        },
                                                                    },
                                                                    [
                                                                        o("path", {
                                                                            attrs: {
                                                                                d:
                                                                                    "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z",
                                                                            },
                                                                        }),
                                                                    ]
                                                                ),
                                                                t._v("\n           เข้าสู่ระบบด้วยดิสคอร์ด\n        "),
                                                            ]
                                                        ),
                                                    ],
                                                    1
                                                ),
                                                t._v(" "),
                                                o(
                                                    "span",
                                                    {
                                                        staticClass: "float-right mt-4 mb-3",
                                                    },
                                                    [
                                                        o(
                                                            "a",
                                                            {
                                                                staticClass: "text-white",
                                                                attrs: {
                                                                    type: "button",
                                                                },
                                                                on: {
                                                                    click: function (o) {
                                                                        t.$bvModal.show("login-modal"), t.$bvModal.hide("register-modal");
                                                                    },
                                                                },
                                                            },
                                                            [t._v("มีบัญชีผู้ใช้อยู่แล้ว? เข้าสู่ระบบเลย!")]
                                                        ),
                                                    ]
                                                ),
                                            ]
                                        ),
                                    ],
                                    1
                                ),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            o.default = component.exports;
        },
        183: function (t, o, e) {
            "use strict";
            e.r(o);
            e(4), e(60);
            var r = e(253),
                n = e.n(r),
                l =
                    (e(321),
                    e(323),
                    {
                        name: "Main",
                        components: {
                            VueSlickCarousel: n.a,
                        },
                        data: function () {
                            return {
                                slides: [],
                                settings: {
                                    arrows: !1,
                                    infinite: !0,
                                    speed: 500,
                                    slidesToShow: 1,
                                    slidesToScroll: 3,
                                    initialSlide: 0,
                                    centerMode: !0,
                                    centerPadding: "100px",
                                    variableWidth: !0,
                                    autoplay: !0,
                                    responsive: [
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 1,
                                                slidesToScroll: 3,
                                                infinite: !0,
                                                dots: !0,
                                            },
                                        },
                                        {
                                            breakpoint: 768,
                                            settings: {
                                                slidesToShow: 1,
                                                slidesToScroll: 1,
                                                variableWidth: !1,
                                                centerMode: !1,
                                            },
                                        },
                                        {
                                            breakpoint: 390,
                                            settings: {
                                                slidesToShow: 1,
                                                slidesToScroll: 1,
                                                variableWidth: !1,
                                                centerMode: !1,
                                            },
                                        },
                                    ],
                                },
                            };
                        },
                        mounted: function () {
                            this.getSlides();
                        },
                        methods: {
                            getSlides: function () {
                                var t = this;
                                this.$axios.get("/slide?limit=10000").then(function (o) {
                                    var data = o.data;
                                    t.slides = data.result.data;
                                });
                            },
                        },
                    }),
                d = e(40),
                component = Object(d.a)(
                    l,
                    function () {
                        var t = this,
                            o = t._self._c;
                        return o(
                            "section",
                            {
                                attrs: {
                                    id: "main",
                                },
                            },
                            [
                                o(
                                    "b-container",
                                    {
                                        staticClass: "mb-5",
                                    },
                                    [
                                        o(
                                            "b-row",
                                            [
                                                o(
                                                    "b-col",
                                                    {
                                                        staticClass: "mb-xl-0 mb-5",
                                                        attrs: {
                                                            xl: "4",
                                                            md: "4",
                                                        },
                                                    },
                                                    [
                                                        o("h1", [
                                                            o(
                                                                "svg",
                                                                {
                                                                    staticClass: "bi bi-robot",
                                                                    attrs: {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        width: "50",
                                                                        height: "50",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 16 16",
                                                                    },
                                                                },
                                                                [
                                                                    o("path", {
                                                                        attrs: {
                                                                            d:
                                                                                "M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z",
                                                                        },
                                                                    }),
                                                                    t._v(" "),
                                                                    o("path", {
                                                                        attrs: {
                                                                            d:
                                                                                "M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z",
                                                                        },
                                                                    }),
                                                                ]
                                                            ),
                                                        ]),
                                                        t._v(" "),
                                                        o("h2", [t._v("Aimbot Skill")]),
                                                        t._v(" "),
                                                        o("span", [
                                                            t._v(
                                                                "โปรล็อคตัวคมๆ เหมาะกับการใช้ PvP มากๆ และสกิลโดนศัตรูอย่างแม่นยำ แน่นอนว่าไม่ได้มีแค่เกม Blox Fruits อย่างเดียว เรามีฟังก์ชั่นอื่นๆอีกมากมายหลากหลายแมพของ Roblox\n          และรับรองได้ว่ามีฟังก์ชั่นเพียบแน่นอนทุกแมพที่เราวางจำหน่าย"
                                                            ),
                                                        ]),
                                                    ]
                                                ),
                                                t._v(" "),
                                                o(
                                                    "b-col",
                                                    {
                                                        staticClass: "mb-xl-0 mb-5",
                                                        attrs: {
                                                            xl: "4",
                                                            md: "4",
                                                        },
                                                    },
                                                    [
                                                        o("h1", [
                                                            o(
                                                                "svg",
                                                                {
                                                                    staticClass: "bi bi-battery-charging",
                                                                    attrs: {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        width: "50",
                                                                        height: "50",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 16 16",
                                                                    },
                                                                },
                                                                [
                                                                    o("path", {
                                                                        attrs: {
                                                                            d:
                                                                                "M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z",
                                                                        },
                                                                    }),
                                                                    t._v(" "),
                                                                    o("path", {
                                                                        attrs: {
                                                                            d: "M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
                                                                        },
                                                                    }),
                                                                    t._v(" "),
                                                                    o("path", {
                                                                        attrs: {
                                                                            d: "M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2V6zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.405z",
                                                                        },
                                                                    }),
                                                                    t._v(" "),
                                                                    o("path", {
                                                                        attrs: {
                                                                            d: "M12 10h-1.783l1.542-1.639c.097-.103.178-.218.241-.34V10zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646zM16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z",
                                                                        },
                                                                    }),
                                                                ]
                                                            ),
                                                        ]),
                                                        t._v(" "),
                                                        o("h2", [t._v("Customizable")]),
                                                        t._v(" "),
                                                        o("span", [
                                                            t._v(
                                                                "คุณสามารถปรับแต่ง เมนูโปรได้ไม่ว่าจะเป็นการเปลี่ยนสีเมนูโปร หรือแก้ไขส่วนอื่นๆ และสิ่งที่พิเศษที่เรามีเลยคือ ระบบ Save Settings ที่ช่วยให้เซฟการตั้งค่าที่คุณเคยตั้งค่าไว้ก่อนหน้านี้\n          คุณตั้งสีไหนไว้ พอรันสคริปต์ใหม่สีก็จะเป็นสีที่คุณตั้งไว้ รวมถึงฟังก์ชั่นที่คุณกดไว้ก็เช่นกัน!"
                                                            ),
                                                        ]),
                                                    ]
                                                ),
                                                t._v(" "),
                                                o(
                                                    "b-col",
                                                    {
                                                        staticClass: "mb-xl-0 mb-5",
                                                        attrs: {
                                                            xl: "4",
                                                            md: "4",
                                                        },
                                                    },
                                                    [
                                                        o("h1", [
                                                            o(
                                                                "svg",
                                                                {
                                                                    staticClass: "bi bi-person-hearts",
                                                                    attrs: {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        width: "50",
                                                                        height: "50",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 16 16",
                                                                    },
                                                                },
                                                                [
                                                                    o("path", {
                                                                        attrs: {
                                                                            "fill-rule": "evenodd",
                                                                            d:
                                                                                "M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z",
                                                                        },
                                                                    }),
                                                                ]
                                                            ),
                                                        ]),
                                                        t._v(" "),
                                                        o("h2", [t._v("Support")]),
                                                        t._v(" "),
                                                        o("span", [
                                                            t._v(
                                                                'การให้บริการหลังการซื้อสคริปต์ เป็นสิ่งสำคัญของค่าย Xenon Hub ของเราเป็นอย่างมาก เราตอบแชทลูกค้าทุกวันไม่มีวันหยุด! จ่ายหลักร้อย คุณได้ซัพพอร์ตช่วยเหลือคุณตลอดชีพ\n          เพราะฉะนั้นมั่นใจได้เลยว่า "ด้วยบริการอย่างมืออาชีพ"'
                                                            ),
                                                        ]),
                                                    ]
                                                ),
                                                t._v(" "),
                                                o(
                                                    "b-col",
                                                    {
                                                        staticClass: "mt-5 text-md-center",
                                                        attrs: {
                                                            id: "feature",
                                                            xl: "4",
                                                            cols: "12",
                                                            md: "4",
                                                        },
                                                    },
                                                    [
                                                        o(
                                                            "span",
                                                            {
                                                                staticClass: "box px-3 py-2",
                                                            },
                                                            [
                                                                o(
                                                                    "svg",
                                                                    {
                                                                        staticClass: "bi bi-robot",
                                                                        attrs: {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "25",
                                                                            height: "25",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 16 16",
                                                                        },
                                                                    },
                                                                    [
                                                                        o("path", {
                                                                            attrs: {
                                                                                d:
                                                                                    "M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z",
                                                                            },
                                                                        }),
                                                                        t._v(" "),
                                                                        o("path", {
                                                                            attrs: {
                                                                                d:
                                                                                    "M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z",
                                                                            },
                                                                        }),
                                                                    ]
                                                                ),
                                                            ]
                                                        ),
                                                        t._v("\n        Undetected\n      "),
                                                    ]
                                                ),
                                                t._v(" "),
                                                o(
                                                    "b-col",
                                                    {
                                                        staticClass: "mt-5 text-md-center",
                                                        attrs: {
                                                            id: "feature",
                                                            xl: "4",
                                                            cols: "12",
                                                            md: "4",
                                                        },
                                                    },
                                                    [
                                                        o(
                                                            "span",
                                                            {
                                                                staticClass: "box px-3 py-2",
                                                            },
                                                            [
                                                                o(
                                                                    "svg",
                                                                    {
                                                                        staticClass: "bi bi-battery-charging",
                                                                        attrs: {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "25",
                                                                            height: "25",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 16 16",
                                                                        },
                                                                    },
                                                                    [
                                                                        o("path", {
                                                                            attrs: {
                                                                                d:
                                                                                    "M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z",
                                                                            },
                                                                        }),
                                                                        t._v(" "),
                                                                        o("path", {
                                                                            attrs: {
                                                                                d: "M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
                                                                            },
                                                                        }),
                                                                        t._v(" "),
                                                                        o("path", {
                                                                            attrs: {
                                                                                d: "M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2V6zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.405z",
                                                                            },
                                                                        }),
                                                                        t._v(" "),
                                                                        o("path", {
                                                                            attrs: {
                                                                                d: "M12 10h-1.783l1.542-1.639c.097-.103.178-.218.241-.34V10zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646zM16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z",
                                                                            },
                                                                        }),
                                                                    ]
                                                                ),
                                                            ]
                                                        ),
                                                        t._v("\n        Customizable\n      "),
                                                    ]
                                                ),
                                                t._v(" "),
                                                o(
                                                    "b-col",
                                                    {
                                                        staticClass: "mt-5 text-md-center",
                                                        attrs: {
                                                            id: "feature",
                                                            xl: "4",
                                                            cols: "12",
                                                            md: "4",
                                                        },
                                                    },
                                                    [
                                                        o(
                                                            "span",
                                                            {
                                                                staticClass: "box px-3 py-2",
                                                            },
                                                            [
                                                                o(
                                                                    "svg",
                                                                    {
                                                                        staticClass: "bi bi-person-hearts",
                                                                        attrs: {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "25",
                                                                            height: "25",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 16 16",
                                                                        },
                                                                    },
                                                                    [
                                                                        o("path", {
                                                                            attrs: {
                                                                                "fill-rule": "evenodd",
                                                                                d:
                                                                                    "M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z",
                                                                            },
                                                                        }),
                                                                    ]
                                                                ),
                                                            ]
                                                        ),
                                                        t._v("\n        Competitive\n      "),
                                                    ]
                                                ),
                                            ],
                                            1
                                        ),
                                    ],
                                    1
                                ),
                                t._v(" "),
                                o(
                                    "div",
                                    {
                                        attrs: {
                                            id: "slide",
                                        },
                                    },
                                    [
                                        t.slides.length
                                            ? o(
                                                  "VueSlickCarousel",
                                                  t._b({}, "VueSlickCarousel", t.settings, !1),
                                                  t._l(t.slides, function (e, r) {
                                                      return o(
                                                          "div",
                                                          {
                                                              key: r,
                                                              staticClass: "px-4",
                                                          },
                                                          [
                                                              o(
                                                                  "div",
                                                                  {
                                                                      staticClass: "banner-slide py-5",
                                                                  },
                                                                  [
                                                                      o("b-img", {
                                                                          staticClass: "img-slide",
                                                                          attrs: {
                                                                              src: "".concat(e.image),
                                                                              center: "",
                                                                              fluid: "",
                                                                              rounded: "10",
                                                                          },
                                                                      }),
                                                                      t._v(" "),
                                                                      o(
                                                                          "div",
                                                                          {
                                                                              staticClass: "text-banner",
                                                                          },
                                                                          [o("h1", [t._v(t._s(e.title))]), t._v(" "), o("span", [t._v(t._s(e.description))])]
                                                                      ),
                                                                  ],
                                                                  1
                                                              ),
                                                          ]
                                                      );
                                                  }),
                                                  0
                                              )
                                            : t._e(),
                                    ],
                                    1
                                ),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            o.default = component.exports;
        },
        258: function (t, o, e) {
            "use strict";
            var r = {
                    components: {},
                    head: function () {
                        return {
                            title: this.site.site_title + " Admin",
                            htmlAttrs: {
                                lang: "en",
                            },
                            meta: [
                                {
                                    charset: "utf-8",
                                },
                                {
                                    name: "viewport",
                                    content: "width=device-width, initial-scale=1",
                                },
                                {
                                    hid: "keywords",
                                    name: "keywords",
                                    content: this.site.site_keyword,
                                },
                                {
                                    hid: "description",
                                    name: "description",
                                    content: this.site.site_description,
                                },
                                {
                                    hid: "og:title",
                                    property: "og:title",
                                    content: this.site.site_title,
                                },
                                {
                                    hid: "og:description",
                                    property: "og:description",
                                    content: this.site.site_description,
                                },
                                {
                                    hid: "og:image",
                                    property: "og:image",
                                    content: this.site.site_logo,
                                },
                                {
                                    hid: "og:image:secure_url",
                                    property: "og:image:secure_url",
                                    content: this.site.site_logo,
                                },
                                {
                                    hid: "og:url",
                                    property: "og:url",
                                    content: this.site.site_url,
                                },
                                {
                                    hid: "og:image:alt",
                                    property: "og:image:alt",
                                    content: this.site.site_title,
                                },
                            ],
                            link: [
                                {
                                    rel: "icon",
                                    type: "image/x-icon",
                                    href: this.site.site_logo,
                                },
                            ],
                        };
                    },
                    mounted: function () {
                        this.getSite();
                    },
                    data: function () {
                        return {
                            site: [],
                        };
                    },
                    methods: {
                        getSite: function () {
                            var t = this;
                            this.$axios.get("site").then(function (o) {
                                var data = o.data;
                                t.site = data;
                            });
                        },
                    },
                },
                n = e(40),
                component = Object(n.a)(
                    r,
                    function () {
                        var t = this._self._c;
                        return t("div", [t("main", [t("Nuxt")], 1)]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            o.a = component.exports;
            installComponents(component, {
                Main: e(183).default,
            });
        },
        259: function (t, o, e) {
            "use strict";
            var r = e(0),
                n = e(254),
                l = e.n(n),
                d = (e(325), e(140)),
                c = e(134),
                h = Object(r.a)(
                    {
                        components: {
                            Navbar: d.default,
                            Footer: c.default,
                        },
                        head: function () {
                            return {
                                title: this.site.site_title,
                                htmlAttrs: {
                                    lang: "en",
                                },
                                meta: [
                                    {
                                        charset: "utf-8",
                                    },
                                    {
                                        name: "viewport",
                                        content: "width=device-width, initial-scale=1",
                                    },
                                    {
                                        hid: "keywords",
                                        name: "keywords",
                                        content: this.site.site_keyword,
                                    },
                                    {
                                        hid: "description",
                                        name: "description",
                                        content: this.site.site_description,
                                    },
                                    {
                                        hid: "og:title",
                                        property: "og:title",
                                        content: this.site.site_title,
                                    },
                                    {
                                        hid: "og:description",
                                        property: "og:description",
                                        content: this.site.site_description,
                                    },
                                    {
                                        hid: "og:image",
                                        property: "og:image",
                                        content: this.site.site_logo,
                                    },
                                    {
                                        hid: "og:image:secure_url",
                                        property: "og:image:secure_url",
                                        content: this.site.site_logo,
                                    },
                                    {
                                        hid: "og:url",
                                        property: "og:url",
                                        content: this.site.site_url,
                                    },
                                    {
                                        hid: "og:image:alt",
                                        property: "og:image:alt",
                                        content: this.site.site_title,
                                    },
                                ],
                                link: [
                                    {
                                        rel: "icon",
                                        type: "image/x-icon",
                                        href: this.site.site_logo,
                                    },
                                ],
                            };
                        },
                        mounted: function () {
                            l.a.init({}), this.getSite();
                        },
                        data: function () {
                            return {
                                site: [],
                            };
                        },
                        methods: {
                            getSite: function () {
                                var t = this;
                                this.$axios.get("site").then(function (o) {
                                    var data = o.data;
                                    t.site = data;
                                });
                            },
                        },
                    },
                    "components",
                    {
                        Navbar: d.default,
                    }
                ),
                m = e(40),
                component = Object(m.a)(
                    h,
                    function () {
                        var t = this,
                            o = t._self._c;
                        return o(
                            "div",
                            [
                                o("Navbar", {
                                    attrs: {
                                        site: t.site,
                                    },
                                }),
                                t._v(" "),
                                o(
                                    "main",
                                    [
                                        o("Nuxt"),
                                        t._v(" "),
                                        o("Footer", {
                                            attrs: {
                                                site: t.site,
                                            },
                                        }),
                                    ],
                                    1
                                ),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            o.a = component.exports;
            installComponents(component, {
                Navbar: e(140).default,
                Footer: e(134).default,
                Main: e(183).default,
            });
        },
        269: function (t, o, e) {
            e(270), (t.exports = e(271));
        },
        319: function (t, o, e) {
            var content = e(320);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
            (0, e(62).default)("0343f152", content, !0, {
                sourceMap: !1,
            });
        },
        320: function (t, o, e) {
            var r = e(61)(!1);
            r.push([t.i, "@import url(https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),
                r.push([t.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]),
                r.push([
                    t.i,
                    'li{list-style-type:none!important}body{font-family:"Prompt",sans-serif;background-color:#141414;background-size:cover!important;scroll-behavior:smooth}video{-o-object-fit:cover;object-fit:cover;width:100vw;position:fixed;top:0;left:0}main,video{height:100vh}main{overflow:auto;background:rgba(0,0,0,.7)!important;color:#fff;position:relative}.bg-navbar{background-color:rgba(0,0,0,.2)!important;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.bg-transparent{background-color:transparent}.card{background-color:#242426!important;border-radius:5px;border:none}.custom-line{background:#333;margin-top:-2px}.navbar-dark .navbar-nav .nav-link{color:hsla(0,0%,100%,.5);font-size:18px}.navbar-nav .dropdown-menu{position:static;float:none;margin-top:30px}.dropdown-menu{border:2px solid hsla(0,0%,80%,.1098);background-color:rgba(36,36,38,.2);padding-top:20px;padding-bottom:20px;border-radius:10px;box-shadow:0 0 15px hsla(0,0%,100%,.07059)}.dropdown-item{color:#fff;width:230px}.dropdown-item.active,.dropdown-item:active,.dropdown-item:focus,.dropdown-item:hover{color:#fff;text-decoration:none;background-color:rgba(36,36,38,.2)}.dropdown-item:focus,.dropdown-item:hover{border-left:3px solid #fff}.dropdown-divider{border-top:1px solid hsla(0,0%,100%,.07843)}#footer{margin-top:100px;margin-bottom:30px}#footer p{font-size:12px}#main h1{font-size:20px;font-weight:900}#header h1{font-size:100px;font-weight:900}#header span{font-size:20px;font-weight:300}#subscribe-text{line-height:20px}#subscribe-text h5,#subscribe-text span{font-size:16px}#store-category,#store-item h1{font-size:50px;font-weight:600}#store-category,#store-item h4,#store-item h5{font-size:1.3rem;font-weight:300}#store-category,#store-item a{color:#cbcaca;font-size:1.2rem;font-weight:400}.text-display{line-height:5px}.text-display h5{font-size:18px;font-weight:600;color:#fff}.text-display span{font-size:13px;color:#cdcdcd}#component-section h4{font-weight:500!important}.box-animate{padding:5px;border-radius:10px}.box-animate:hover{border:2px solid rgba(86,84,83,.4)!important;padding:15px;transition-duration:.4s}a{color:#fff}a:hover{text-decoration:none}.btn-xenon{background-color:hsla(0,0%,100%,.18);color:#fff;font-size:24px;font-weight:500}.badge-xenon{background-color:hsla(0,0%,100%,.07059);padding-left:16px;padding-right:-20px;font-size:16px}.btn-xenon:active,.btn-xenon:hover{color:hsla(0,0%,100%,.788)}.btn-outline-light{background-color:transparent;border:1px solid rgba(248,249,250,.0902)}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#fff;background-color:#f8f9fa;border-left:2px solid #ccc!important;background-color:transparent;border-color:rgba(248,249,250,.1098)}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:none}.btn-subscribe{background-color:transparent;border:1px solid hsla(0,0%,100%,.52941)!important;border-radius:50px;color:#fff;font-size:18px;font-weight:300}.btn-subscribe:active,.btn-subscribe:hover{color:hsla(0,0%,100%,.788)}.btn-submit{background-color:hsla(0,0%,100%,.18039)!important}.btn-discord,.btn-submit{border-color:transparent;border-radius:10px!important;font-size:20px}.btn-discord{background-color:rgba(76,76,77,.3098)!important}.btn-auth{color:hsla(0,0%,100%,.75);background-color:transparent;border-color:transparent;border-radius:10px!important;font-size:20px}#slide img{pointer-events:none}.btn-auth:active,.btn-auth:focus,.btn-auth:hover{background-color:transparent!important;border-color:transparent;border-radius:10px!important;font-size:20px}@media (min-width:390px){#main{padding-top:100px}#component-section,#slide{margin-top:100px}#header{padding-top:200px}.text-banner{position:absolute!important;color:#fff;font-size:10px;top:40%;margin-left:1%}#header h1{font-size:55px;font-weight:900}#header h2{font-size:24px;font-weight:600}.text-banner h1{font-size:30px!important;font-weight:300}#store-category,#store-item{padding-top:140px}.slick-current .img-slide{height:400px;margin-top:0}.fade-in{animation:fadeIn 5s ease;-webkit-animation:fadeIn 5s ease;-moz-animation:fadeIn ease 5s;-o-animation:fadeIn ease 5s;-ms-animation:fadeIn ease 5s}.slick-current{transition-duration:1s}.text-banner{display:none!important}.slick-current .img-slide{height:250px!important;width:633px;transition-duration:.3s}.img-slide{height:250px!important;transition-duration:.2s;width:633px}.slick-current .text-banner{display:block!important;animation-name:bottomFadeOut;animation-duration:1.5s}.slick-slide{padding-left:0;padding-right:0}}@media (min-width:768px){.bg-navbar{background-color:transparent!important;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.text-banner{position:absolute!important;color:#fff;font-size:17px;top:43%;margin-left:2%}.slick-current .img-slide{height:350px!important;width:633px;transition-duration:.3s}.img-slide{height:350px!important;transition-duration:.2s;width:633px}}@media (min-width:1200px){#main{padding-top:400px}#component-section{margin-top:150px}#slide{margin-top:350px}#header{padding-top:300px}.text-banner{position:absolute!important;color:#fff;font-size:30px;top:40%;margin-left:70px}.text-banner span{color:#fff;font-size:16px}#header h1{font-size:100px;font-weight:900}#header h2{font-size:40px;font-weight:600}.text-banner h1{font-size:40px!important;font-weight:300}#store-category,#store-item{padding-top:170px}.text-banner{display:none!important}.slick-current .img-slide{height:400px!important;width:633px!important;margin-top:0;transition-duration:.3s}.fade-in{animation:fadeIn 5s ease;-webkit-animation:fadeIn 5s ease;-moz-animation:fadeIn ease 5s;-o-animation:fadeIn ease 5s;-ms-animation:fadeIn ease 5s}.img-slide{height:350px!important;transition-duration:.2s;margin-top:20px;width:633px}.slick-current .text-banner{display:block!important;animation-name:bottomFadeOut;animation-duration:1.5s}.slick-current{transition-duration:1s}.slick-slide{padding-left:150px;padding-right:150px}}#button-7{position:relative;overflow:hidden;cursor:pointer}#button-7 a{position:relative;left:0}#button-7 a,#dub-arrow{transition:all .35s ease-Out}#dub-arrow{width:100%;height:100%;background:transparent;left:-200px;position:absolute;padding:0;display:flex;align-items:center;justify-content:center;bottom:0}#button-7 img{width:20px;height:auto}#button-7:hover #dub-arrow{left:0}#button-7:hover a{left:150px}.button{display:inline-flex;height:40px;width:150px;border:1px solid #fff;margin:20px;color:#fff;text-transform:uppercase;text-decoration:none;font-size:.8em;letter-spacing:1.5px;align-items:center;justify-content:center;overflow:hidden}.box{background:transparent;border:1px solid #ccc;border-radius:10px}#feature{font-size:24px}.rounded-10{border-radius:10px}.modal-content{background:#242426!important;color:#fff;border-radius:20px}#login-text,#payment-text,#register-text{display:inline-block;width:100px;color:#fff}#login-text.active,#payment-text.active,#register-text.active{border-bottom:4px solid #dee2e6;padding-bottom:10px}.custom-file-label,.custom-file-label:after,.custom-select,.custom-select:active,.custom-select:disabled,.custom-select:focus,.form-control,.form-control:active,.form-control:disabled,.form-control:focus,.form-control[readonly]{background-color:#2a2a2c;border-color:#3a3a3a;box-shadow:none;color:#d7d7d7}#login-submit,#register-submit{background-color:#434345!important;border-color:transparent;border-radius:10px!important;font-size:20px}.embed-resp{position:relative;padding-bottom:56.25%;padding-top:25px;height:0}.embed-resp iframe{position:absolute;top:0;left:0;width:100%;height:100%}.bg-dark{background-color:#242426!important}.bg-custom-dark{background-color:hsla(0,0%,100%,.01176)!important}.page-item.active .page-link{background-color:#1b1b1c;border-color:#1b1b1c}.page-link{color:#fff}.page-link:hover{color:#fff;background-color:#2a2a2c;border:1px solid rgba(58,58,58,.65882)}.page-link:focus{box-shadow:none}.page-link{background-color:#2a2a2c;border:1px solid #3a3a3a}.page-item.disabled .page-link{background-color:#2a2a2c;border-color:#3a3a3a;color:#fff}.table td,.table th{border-top:1px solid rgba(222,226,230,.10196)}.item-image{width:150px;border-radius:10px}.input-group-text{background-color:#1b1b1c;border-color:#1b1b1c;color:#fff}.item-image-soldout{filter:grayscale(1);position:relative}.item-text-discount{position:absolute;top:3%;left:8%;text-align:center;color:#fff;background-color:#000;border-radius:20px;width:20%}.item-text-soldout{position:absolute;top:50%;left:50%;text-align:center;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);color:red;font-weight:700}.input-element{display:none}.card-input:hover{cursor:pointer}.input-element:checked+.card-input{box-shadow:0 0 10px 1px hsla(0,0%,98.4%,.07843);border:1px solid #f11212;border-radius:10px;background-color:rgba(255,0,0,.05098)}.card-input{box-shadow:0 0 1px 1px #343434;padding:5px;border-radius:10px!important;background-color:#2a2a2a}.radio:focus~.card-input{box-shadow:0 0 0 2px #000}.avatar-file{display:none}.avatar{position:relative;padding:0;width:150px;display:block;cursor:pointer;overflow:hidden}.avatar-content{opacity:0;font-size:25px;position:absolute;top:0;left:0;color:#000;background-color:hsla(0,0%,78.4%,.5);border-radius:50%!important;width:150px;height:150px;transition:all .4s ease-out;text-align:center}.avatar .avatar-content:hover{opacity:1}.avatar .avatar-content .text{cursor:pointer;height:150px;opacity:.5;transition-delay:0s;transition-duration:.4s}.avatar .avatar-content:hover .text{opacity:1;transform:translateY(55px);-webkit-transform:translateY(55px)}.slick-track[data-v-e4caeaf8]{position:unset}.slick-slide{margin:0}a:hover{color:hsla(0,0%,100%,.78039)}.divide-hr{background:hsla(0,0%,100%,.07059);height:1px}@keyframes bottomFadeOut{0%{position:absolute;bottom:-5rem;opacity:0}to{opacity:1}}@keyframes rightFadeInOut{0%{position:absolute;right:-3rem;opacity:0}75%{position:absolute;right:10rem;opacity:1}to{opacity:0;right:10rem}}',
                    "",
                ]),
                (t.exports = r);
        },
        327: function (t, o) {},
        365: function (t, o) {
            function e(t) {
                var o = new Error("Cannot find module '" + t + "'");
                throw ((o.code = "MODULE_NOT_FOUND"), o);
            }
            (e.keys = function () {
                return [];
            }),
                (e.resolve = e),
                (t.exports = e),
                (e.id = 365);
        },
    },
    [[269, 33, 3, 34]],
])