(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(4),o=n.n(c),r=n(5),s=n(6),i=n(8),d=n(7),b=n(0),u=function(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h1",{children:t}),n]})},l=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage.toFixed(2);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Staistics"}),Object(b.jsxs)("p",{children:["Good: ",t]}),Object(b.jsxs)("p",{children:["Neutral: ",n]}),Object(b.jsxs)("p",{children:["Bad: ",a]}),Object(b.jsxs)("p",{children:["Total: ",c]}),Object(b.jsxs)("p",{children:["Positive feedback: ",o," %"]})]})},j=n(2),h=n.n(j),k=function(e){var t=e.options;return Object(b.jsxs)("div",{className:h.a.btn_container,children:[Object(b.jsx)("button",{className:h.a.btn,onClick:t.goodFeedback,children:"Good"}),Object(b.jsx)("button",{className:h.a.btn,onClick:t.neutralFeedback,children:"Neutral"}),Object(b.jsx)("button",{className:h.a.btn,onClick:t.badFeedback,children:"Bad"})]})},g=function(e){var t=e.message;return Object(b.jsx)("p",{children:t})},f=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.goodFeedback=function(){e.setState((function(e){return{good:e.good+1}}))},e.neutralFeedback=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.badFeedback=function(){e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(e){return e.good+e.neutral+e.bad},e.countPositiveFeedbackPercentage=function(e){var t=e.good;return t/((t+e.neutral+e.bad)/100)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.good,t=this.state.neutral,n=this.state.bad,a={goodFeedback:this.goodFeedback,neutralFeedback:this.neutralFeedback,badFeedback:this.badFeedback};return Object(b.jsxs)(u,{title:"Please leave feedback",children:[Object(b.jsx)(k,{options:a}),this.countTotalFeedback(this.state)?Object(b.jsx)(l,{good:e,neutral:t,bad:n,total:this.countTotalFeedback(this.state),positivePercentage:this.countPositiveFeedbackPercentage(this.state)}):Object(b.jsx)(g,{message:"No feedback given"})]})}}]),n}(a.Component),O=function(){return Object(b.jsx)(f,{})};n(14);o.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))},2:function(e,t,n){e.exports={btn:"Widget_btn__1Tazs",btn_container:"Widget_btn_container__NQ-dh"}}},[[15,1,2]]]);
//# sourceMappingURL=main.fc74c513.chunk.js.map