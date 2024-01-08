(window.webpackJsonp = window.webpackJsonp || []).push([
    [29, 19, 22],
    {
        371: function (t, e, o) {
            "use strict";
            o.r(e);
            var n = {
                    name: "Header",
                },
                r = o(40),
                component = Object(r.a)(
                    n,
                    function () {
                        var t = this,
                            e = t._self._c;
                        return e(
                            "section",
                            {
                                attrs: {
                                    id: "header",
                                },
                            },
                            [
                                e(
                                    "div",
                                    {
                                        staticClass: "container text-center",
                                    },
                                    [
                                        e("h1", [t._v("XENON HUB")]),
                                        t._v(" "),
                                        e("i", {
                                            staticClass: "mdi mdi-login",
                                        }),
                                        t._v(" "),
                                        e("h2", [t._v("โปร ROBLOX :")]),
                                        t._v(" "),
                                        e(
                                            "h2",
                                            {
                                                staticClass: "mb-3",
                                            },
                                            [t._v("Undetected Cheat")]
                                        ),
                                        t._v(" "),
                                        t._m(0),
                                        t._v(" "),
                                        e("br"),
                                        t._v(" "),
                                        e(
                                            "NuxtLink",
                                            {
                                                attrs: {
                                                    to: "/store",
                                                },
                                            },
                                            [
                                                e(
                                                    "b-button",
                                                    {
                                                        staticClass: "mt-4 px-5",
                                                        attrs: {
                                                            variant: "xenon",
                                                        },
                                                    },
                                                    [t._v("Buy Now")]
                                                ),
                                            ],
                                            1
                                        ),
                                    ],
                                    1
                                ),
                            ]
                        );
                    },
                    [
                        function () {
                            var t = this,
                                e = t._self._c;
                            return e("span", [t._v("โปร ROBLOX ที่มียอดซื้อมากที่สุด ด้วยประสบการณ์ที่ทำมาหลายปี"), e("br"), t._v("และปลอดภัยใช้งานง่าย รองรับตัวรันฟรี")]);
                        },
                    ],
                    !1,
                    null,
                    null,
                    null
                );
            e.default = component.exports;
        },
        372: function (t, e, o) {
            "use strict";
            o.r(e);
            o(117), o(4), o(60), o(2), o(1), o(3), o(18), o(92), o(37);
            var n = {
                    name: "Subscribe",
                    data: function () {
                        return {
                            category: {},
                            items: {},
                            itemPurchase: {},
                            itemAmount: 1,
                        };
                    },
                    mounted: function () {
                        this.getItems();
                    },
                    methods: {
                        getItems: function () {
                            var t = this;
                            this.$axios
                                .$get("item/show")
                                .then(function (e) {
                                    var o = e.result,
                                        n = o.filter(function (t) {
                                            return 0 === t.category.type;
                                        });
                                    o.forEach(function (t) {
                                        t.datas = parseInt(JSON.stringify(t.datas).slice(1, -1));
                                    }),
                                        (t.items = n.sort(function (a, b) {
                                            return 0 === a.datas && 0 !== b.datas ? b.priority - a.priority : 0 === b.datas && 0 !== a.datas ? a.priority - b.priority : b.priority - a.priority;
                                        }));
                                })
                                .catch(function (t) {
                                    console.log(t);
                                });
                        },
                        purchase: function () {
                            var t,
                                e = this;
                            (t = {
                                item_id: this.itemPurchase._id,
                                amount: this.itemAmount,
                            }),
                                this.$axios
                                    .$post("user/buystore", t)
                                    .then(function (t) {
                                        var o = t.result;
                                        e.getItems(),
                                            e.$bvToast.toast("สินค้า ".concat(o.title, " ถูกส่งไปยังคลังของคุณแล้ว"), {
                                                title: "สั่งซื้อสินค้าสำเร็จ!",
                                                variant: "default",
                                                solid: !0,
                                                autoHideDelay: 1e3,
                                            });
                                    })
                                    .catch(function (t) {
                                        e.$bvToast.toast(t.response.data.message, {
                                            title: "เกิดข้อผิดพลาด",
                                            variant: "danger",
                                            solid: !1,
                                        });
                                    }),
                                setTimeout(function () {
                                    e.$auth.fetchUser().then(function () {
                                        e.closeModal();
                                    });
                                }, 50),
                                this.getItems();
                        },
                        showPurchaseStoreModal: function (t) {
                            0 !== t.datas && ((this.itemPurchase = t), this.$bvModal.show("purchase-modal"));
                        },
                        closeModal: function () {
                            (this.itemPurchase = {}), this.$bvModal.hide("purchase-modal");
                        },
                    },
                },
                r = o(40),
                component = Object(r.a)(
                    n,
                    function () {
                        var t = this,
                            e = t._self._c;
                        return e(
                            "section",
                            {
                                attrs: {
                                    id: "store-category",
                                },
                            },
                            [
                                e(
                                    "b-container",
                                    [
                                        e(
                                            "b-row",
                                            [
                                                e(
                                                    "b-col",
                                                    {
                                                        staticClass: "text-white",
                                                        attrs: {
                                                            cols: "6",
                                                            xl: "6",
                                                        },
                                                    },
                                                    [
                                                        e(
                                                            "h3",
                                                            {
                                                                staticClass: "mt-xl-0 mt-2",
                                                            },
                                                            [t._v("Subscriptions")]
                                                        ),
                                                    ]
                                                ),
                                                t._v(" "),
                                                e(
                                                    "b-col",
                                                    {
                                                        staticClass: "mt-2",
                                                        attrs: {
                                                            cols: "6",
                                                            xl: "6",
                                                        },
                                                    },
                                                    [
                                                        e(
                                                            "NuxtLink",
                                                            {
                                                                attrs: {
                                                                    to: "/store",
                                                                },
                                                            },
                                                            [
                                                                e(
                                                                    "b-button",
                                                                    {
                                                                        staticClass: "float-right px-5",
                                                                        attrs: {
                                                                            variant: "subscribe",
                                                                        },
                                                                    },
                                                                    [t._v("เพิ่มเติม")]
                                                                ),
                                                            ],
                                                            1
                                                        ),
                                                    ],
                                                    1
                                                ),
                                            ],
                                            1
                                        ),
                                        t._v(" "),
                                        e(
                                            "b-row",
                                            t._l(t.items, function (o, n) {
                                                return 0 !== o.status
                                                    ? e(
                                                          "b-col",
                                                          {
                                                              key: n,
                                                              staticClass: "mt-4",
                                                              attrs: {
                                                                  xl: "3",
                                                                  md: "4",
                                                                  cols: "6",
                                                              },
                                                          },
                                                          [
                                                              e(
                                                                  "a",
                                                                  {
                                                                      attrs: {
                                                                          type: "button",
                                                                      },
                                                                      on: {
                                                                          click: function (e) {
                                                                              return t.showPurchaseStoreModal(o);
                                                                          },
                                                                      },
                                                                  },
                                                                  [
                                                                      e(
                                                                          "div",
                                                                          {
                                                                              staticClass: "box-animate",
                                                                          },
                                                                          [
                                                                              e("b-img", {
                                                                                  class: ["img-fluid rounded-10", 0 === o.datas ? "item-image-soldout" : ""],
                                                                                  attrs: {
                                                                                      src: "".concat(o.image),
                                                                                      alt: "".concat(o.title),
                                                                                  },
                                                                              }),
                                                                              t._v(" "),
                                                                              0 !== o.discount
                                                                                  ? e(
                                                                                        "p",
                                                                                        {
                                                                                            staticClass: "item-text-discount",
                                                                                        },
                                                                                        [t._v("-" + t._s(o.discount) + "%")]
                                                                                    )
                                                                                  : t._e(),
                                                                              t._v(" "),
                                                                              e(
                                                                                  "b-row",
                                                                                  {
                                                                                      staticClass: "mt-4",
                                                                                      attrs: {
                                                                                          id: "subscribe-text",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                      e(
                                                                                          "b-col",
                                                                                          {
                                                                                              attrs: {
                                                                                                  cols: "4",
                                                                                                  xl: "6",
                                                                                              },
                                                                                          },
                                                                                          [e("h5", [t._v(t._s(o.title))])]
                                                                                      ),
                                                                                      t._v(" "),
                                                                                      e(
                                                                                          "b-col",
                                                                                          {
                                                                                              staticClass: "text-right",
                                                                                              attrs: {
                                                                                                  cols: "8",
                                                                                                  xl: "6",
                                                                                              },
                                                                                          },
                                                                                          [e("span", [t._v(t._s(o.price - (o.price * o.discount).toFixed(2) / 100) + " " + t._s(0 == o.type ? "เครดิต" : "รีวอด"))])]
                                                                                      ),
                                                                                  ],
                                                                                  1
                                                                              ),
                                                                          ],
                                                                          1
                                                                      ),
                                                                  ]
                                                              ),
                                                          ]
                                                      )
                                                    : t._e();
                                            }),
                                            1
                                        ),
                                        t._v(" "),
                                        e(
                                            "b-modal",
                                            {
                                                attrs: {
                                                    id: "purchase-modal",
                                                    title: "modal",
                                                    "footer-class": "d-none",
                                                    "header-class": "d-none",
                                                    centered: "",
                                                    size: "md",
                                                },
                                            },
                                            [
                                                e(
                                                    "b-container",
                                                    {
                                                        staticClass: "mt-2",
                                                    },
                                                    [
                                                        e(
                                                            "b-row",
                                                            [
                                                                e(
                                                                    "b-col",
                                                                    {
                                                                        staticClass: "text-left",
                                                                        attrs: {
                                                                            cols: "6",
                                                                            xl: "7",
                                                                        },
                                                                    },
                                                                    [
                                                                        e(
                                                                            "h5",
                                                                            {
                                                                                staticClass: "mb-2",
                                                                            },
                                                                            [t._v(t._s(t.itemPurchase.title))]
                                                                        ),
                                                                    ]
                                                                ),
                                                                t._v(" "),
                                                                e(
                                                                    "b-col",
                                                                    {
                                                                        attrs: {
                                                                            cols: "6",
                                                                            xl: "5",
                                                                        },
                                                                    },
                                                                    [
                                                                        e(
                                                                            "b-badge",
                                                                            {
                                                                                staticClass: "px-5 py-2",
                                                                                attrs: {
                                                                                    variant: "xenon",
                                                                                },
                                                                            },
                                                                            [
                                                                                t._v("เหลือ " + t._s(t.itemPurchase.datas) + " ชิ้น"),
                                                                                e(
                                                                                    "span",
                                                                                    {
                                                                                        staticClass: "sr-only",
                                                                                    },
                                                                                    [t._v("สินค้าคงเหลือ")]
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
                                                        e(
                                                            "div",
                                                            {
                                                                staticClass: "text-center py-4 px-5",
                                                            },
                                                            [
                                                                e("hr", {
                                                                    staticStyle: {
                                                                        background: "#333",
                                                                    },
                                                                }),
                                                                t._v(" "),
                                                                e("b-img", {
                                                                    staticClass: "item-image",
                                                                    attrs: {
                                                                        src: "".concat(t.itemPurchase.image),
                                                                        alt: "".concat(t.itemPurchase.title),
                                                                    },
                                                                }),
                                                                t._v(" "),
                                                                e("hr", {
                                                                    staticStyle: {
                                                                        background: "#333",
                                                                    },
                                                                }),
                                                                t._v(" "),
                                                                e("p", {
                                                                    domProps: {
                                                                        innerHTML: t._s(t.itemPurchase.description),
                                                                    },
                                                                }),
                                                                t._v(" "),
                                                                e("hr", {
                                                                    staticStyle: {
                                                                        background: "#333",
                                                                    },
                                                                }),
                                                                t._v(" "),
                                                                e("p", [
                                                                    t._v(
                                                                        "ราคา: " +
                                                                            t._s((t.itemPurchase.price - (t.itemPurchase.price * t.itemPurchase.discount).toFixed(2) / 100) * t.itemAmount) +
                                                                            " " +
                                                                            t._s(0 == t.itemPurchase.type ? "เครดิต" : "รีวอด")
                                                                    ),
                                                                ]),
                                                                t._v(" "),
                                                                e("p", {
                                                                    domProps: {
                                                                        innerHTML: t._s(0 !== t.itemPurchase.discount ? "ส่วนลด: ".concat(t.itemPurchase.discount, "%") : ""),
                                                                    },
                                                                }),
                                                                t._v(" "),
                                                                e(
                                                                    "b-input-group",
                                                                    {
                                                                        staticClass: "mt-4",
                                                                        attrs: {
                                                                            prepend: "จำนวน",
                                                                            append: "ชิ้น",
                                                                        },
                                                                    },
                                                                    [
                                                                        e("b-form-input", {
                                                                            staticClass: "text-center",
                                                                            attrs: {
                                                                                type: "number",
                                                                                placeholder: "จำนวน",
                                                                                required: "",
                                                                            },
                                                                            model: {
                                                                                value: t.itemAmount,
                                                                                callback: function (e) {
                                                                                    t.itemAmount = e;
                                                                                },
                                                                                expression: "itemAmount",
                                                                            },
                                                                        }),
                                                                    ],
                                                                    1
                                                                ),
                                                            ],
                                                            1
                                                        ),
                                                        t._v(" "),
                                                        t.$auth.loggedIn
                                                            ? t._e()
                                                            : e(
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
                                                                      staticClass: "btn btn-discord w-100 mt-4",
                                                                      on: {
                                                                          click: t.closeModal,
                                                                      },
                                                                  },
                                                                  [t._v("กรุณาเข้าสู่ระบบก่อนทำรายการ")]
                                                              ),
                                                        t._v(" "),
                                                        t.$auth.loggedIn
                                                            ? e(
                                                                  "b-row",
                                                                  {
                                                                      staticClass: "mt-0",
                                                                  },
                                                                  [
                                                                      e(
                                                                          "b-col",
                                                                          {
                                                                              attrs: {
                                                                                  cols: "6",
                                                                              },
                                                                          },
                                                                          [
                                                                              e(
                                                                                  "b-button",
                                                                                  {
                                                                                      staticClass: "btn-submit w-100 mt-4",
                                                                                      on: {
                                                                                          click: t.purchase,
                                                                                      },
                                                                                  },
                                                                                  [t._v("ซื้อสินค้า")]
                                                                              ),
                                                                          ],
                                                                          1
                                                                      ),
                                                                      t._v(" "),
                                                                      e(
                                                                          "b-col",
                                                                          {
                                                                              attrs: {
                                                                                  cols: "6",
                                                                              },
                                                                          },
                                                                          [
                                                                              e(
                                                                                  "b-button",
                                                                                  {
                                                                                      staticClass: "btn-discord w-100 mt-4",
                                                                                      on: {
                                                                                          click: t.closeModal,
                                                                                      },
                                                                                  },
                                                                                  [t._v("ยกเลิก")]
                                                                              ),
                                                                          ],
                                                                          1
                                                                      ),
                                                                  ],
                                                                  1
                                                              )
                                                            : t._e(),
                                                    ],
                                                    1
                                                ),
                                            ],
                                            1
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
            e.default = component.exports;
        },
        375: function (t, e, o) {
            var content = o(397);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
            (0, o(62).default)("e7976828", content, !0, {
                sourceMap: !1,
            });
        },
        396: function (t, e, o) {
            "use strict";
            o(375);
        },
        397: function (t, e, o) {
            var n = o(61)(!1);
            n.push([
                t.i,
                '.splash-screen[data-v-2bd91ad1]{animation:fadeInAnimation-2bd91ad1 2s;animation-delay:.35s;background-color:#141414;width:100vw;height:100vh;position:fixed;z-index:9999}@keyframes fadeInAnimation-2bd91ad1{0%{opacity:1}to{opacity:0}}@keyframes fadeInAnimationLoading-2bd91ad1{0%{opacity:1}to{opacity:0}}.spinner-wrapper[data-v-2bd91ad1]{animation:fadeInAnimationLoading-2bd91ad1 2s ease;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.spinner[data-v-2bd91ad1]{width:80px;height:80px;margin:100px auto;background-color:#fff;border-radius:100%;animation:sk-scaleout-2bd91ad1 1s ease-in-out infinite}@keyframes sk-scaleout-2bd91ad1{0%{transform:scale(0)}to{transform:scale(1);opacity:0}}@blue: #26bbf0;@green: #c2d5a0;@red: #cf6a6d;@yellow: #ffbc0d;@black: #343536;@black-2: #424950;@grey: #89949b;@grey-2: #9aa8b1;@light-grey: #c4c9cd;@light-grey-2: #dbdfe1;@white: #f3f4f5;body[data-v-2bd91ad1]{-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-family:"proxima-nova-soft",sans-serif;-webkit-user-select:none;overflow:hidden;.vertical-centered-box[data-v-2bd91ad1]{position:absolute;width:100%;height:100%;text-align:center}.vertical-centered-box[data-v-2bd91ad1]:after{content:"";display:inline-block;height:100%;vertical-align:middle;margin-right:-.25em}.vertical-centered-box .content[data-v-2bd91ad1]{box-sizing:border-box;display:inline-block;vertical-align:middle;text-align:left;font-size:0}}*[data-v-2bd91ad1]{transition:all .3s}body[data-v-2bd91ad1]{background:#2c2d44}.loader-circle[data-v-2bd91ad1]{width:120px;border-radius:50%;box-shadow:inset 0 0 0 1px hsla(0,0%,100%,.1)}.loader-circle[data-v-2bd91ad1],.loader-line-mask[data-v-2bd91ad1]{position:absolute;left:50%;top:50%;height:120px;margin-left:-60px;margin-top:-60px}.loader-line-mask[data-v-2bd91ad1]{width:60px;overflow:hidden;transform-origin:60px 60px;-webkit-mask-image:-webkit-linear-gradient(top,#000,transparent);animation:rotate-2bd91ad1 1.2s linear infinite}.loader-line-mask .loader-line[data-v-2bd91ad1]{width:120px;height:120px;border-radius:50%;box-shadow:inset 0 0 0 1px hsla(0,0%,100%,.5)}#particles-background[data-v-2bd91ad1],#particles-foreground[data-v-2bd91ad1]{left:-51%;top:-51%;width:202%;height:202%;transform:scale3d(.5,.5,1)}#particles-background[data-v-2bd91ad1]{background:#2c2d44;background-image:linear-gradient(45deg,#3f3251 2%,#002025)}@keyframes rotate-2bd91ad1{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes fade-2bd91ad1{0%{opacity:1}50%{opacity:.25}}@keyframes fade-in-2bd91ad1{0%{opacity:0}to{opacity:1}}',
                "",
            ]),
                (t.exports = n);
        },
        408: function (t, e, o) {
            "use strict";
            o.r(e);
            o(37);
            var n = o(371),
                r = o(183),
                d = o(372),
                c = {
                    name: "IndexPage",
                    components: {
                        Header: n.default,
                        Main: r.default,
                        Subscribe: d.default,
                    },
                    beforeCreate: function () {
                        this.showHideSpinner = !0;
                    },
                    mounted: function () {
                        var t = this;
                        setTimeout(function () {
                            t.showHideSpinner = !1;
                        }, 1e3);
                    },
                    data: function () {
                        return {
                            showHideSpinner: !0,
                        };
                    },
                },
                l = (o(396), o(40)),
                component = Object(l.a)(
                    c,
                    function () {
                        var t = this,
                            e = t._self._c;
                        return e(
                            "div",
                            [
                                t.showHideSpinner
                                    ? e(
                                          "div",
                                          {
                                              staticClass: "splash-screen",
                                          },
                                          [
                                              e(
                                                  "div",
                                                  {
                                                      staticClass: "spinner-wrapper",
                                                  },
                                                  [
                                                      e(
                                                          "div",
                                                          {
                                                              staticClass: "content",
                                                          },
                                                          [
                                                              e("div", {
                                                                  staticClass: "loader-circle",
                                                              }),
                                                              t._v(" "),
                                                              t._m(0),
                                                              t._v(" "),
                                                              e(
                                                                  "svg",
                                                                  {
                                                                      attrs: {
                                                                          width: "36px",
                                                                          height: "24px",
                                                                          viewBox: "0 0 36 24",
                                                                          version: "1.1",
                                                                          xmlns: "http://www.w3.org/2000/svg",
                                                                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                                                      },
                                                                  },
                                                                  [
                                                                      e("path", {
                                                                          attrs: {
                                                                              d:
                                                                                  "M8.98885921,23.8523026 C8.8942483,23.9435442 8.76801031,24 8.62933774,24 L2.03198365,24 C1.73814918,24 1.5,23.7482301 1.5,23.4380086 C1.5,23.2831829 1.55946972,23.1428989 1.65570253,23.0416777 L13.2166154,12.4291351 C13.3325814,12.3262031 13.4061076,12.1719477 13.4061076,11.999444 C13.4061076,11.8363496 13.3401502,11.6897927 13.2352673,11.587431 L1.68841087,0.990000249 C1.57298556,0.88706828 1.5,0.733668282 1.5,0.561734827 C1.5,0.251798399 1.73814918,2.85130108e-05 2.03198365,2.85130108e-05 L8.62933774,2.85130108e-05 C8.76855094,2.85130108e-05 8.89532956,0.0561991444 8.98994048,0.148296169 L21.4358709,11.5757407 C21.548593,11.6783875 21.6196864,11.8297916 21.6196864,11.999444 C21.6196864,12.1693815 21.5483227,12.3219261 21.4350599,12.4251432 L8.98885921,23.8523026 Z M26.5774333,23.8384453 L20.1765996,17.9616286 C20.060093,17.8578413 19.9865669,17.703871 19.9865669,17.5310822 C19.9865669,17.3859509 20.0390083,17.2536506 20.1246988,17.153855 L23.4190508,14.1291948 C23.5163648,14.0165684 23.6569296,13.945571 23.8131728,13.945571 C23.9602252,13.945571 24.0929508,14.0082997 24.1894539,14.1092357 L33.861933,22.9913237 C33.9892522,23.0939706 34.0714286,23.2559245 34.0714286,23.4381226 C34.0714286,23.748059 33.8332794,23.9998289 33.5394449,23.9998289 L26.9504707,23.9998289 C26.8053105,23.9998289 26.6733958,23.9382408 26.5774333,23.8384453 Z M26.5774333,0.161098511 C26.6733958,0.0615881034 26.8053105,0 26.9504707,0 L33.5394449,0 C33.8332794,0 34.0714286,0.251769886 34.0714286,0.561706314 C34.0714286,0.743904453 33.9892522,0.905573224 33.861933,1.00822006 L24.1894539,9.89030807 C24.0929508,9.99152926 23.9602252,10.0542579 23.8131728,10.0542579 C23.6569296,10.0542579 23.5163648,9.98354562 23.4190508,9.87063409 L20.1246988,6.8459739 C20.0390083,6.74617837 19.9865669,6.613878 19.9865669,6.46874677 C19.9865669,6.29624305 20.060093,6.14198767 20.1765996,6.03848544 L26.5774333,0.161098511 Z",
                                                                              fill: "#FFFFFF",
                                                                          },
                                                                      }),
                                                                  ]
                                                              ),
                                                          ]
                                                      ),
                                                  ]
                                              ),
                                          ]
                                      )
                                    : t._e(),
                                t._v(" "),
                                e("Header", {
                                    attrs: {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "3000",
                                    },
                                }),
                                t._v(" "),
                                e("Main"),
                                t._v(" "),
                                e("Subscribe"),
                            ],
                            1
                        );
                    },
                    [
                        function () {
                            var t = this._self._c;
                            return t(
                                "div",
                                {
                                    staticClass: "loader-line-mask",
                                },
                                [
                                    t("div", {
                                        staticClass: "loader-line",
                                    }),
                                ]
                            );
                        },
                    ],
                    !1,
                    null,
                    "2bd91ad1",
                    null
                );
            e.default = component.exports;
            installComponents(component, {
                Header: o(371).default,
                Main: o(183).default,
                Subscribe: o(372).default,
            });
        },
    },
]);
