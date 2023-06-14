import React from "react";
import "../style/register.scss";
import MySlider from "./SlickSlider";
import SlickSlider from "./SlickSlider";
const Register = () => {
  return (
    <div className="register">
      <div className="register__left">
        <div className="register__header">
          <h1>Better Call Our Store</h1>
          <p>Please Sign Up to use our application</p>
        </div>
        <div className="register__form">
          <div className="register__content">
            <div className="register__item">
              <input
                className="input"
                type="text"
                id="name"
                placeholder="Bilal Younes"
              />
              <label className="label" htmlFor="name">
                Enter Your Name
              </label>
            </div>
            <div className="register__item">
              <input
                className="input"
                type="text"
                id="email"
                placeholder="example@gmail.com"
              />
              <label className="label" htmlFor="email">
                Enter Your Email
              </label>
            </div>
            <div className="register__item">
              <input
                className="input"
                placeholder="*********"
                type="password"
                id="password"
              />
              <label className="label" htmlFor="password">
                Enter Your Password
              </label>
            </div>
            <div className="register__item">
              <div className="checkbox">
                <input type="checkbox" id="rememberme" />
                <label htmlFor="rememberme">Remember me</label>
              </div>
            </div>
            <button className="register__btn" type="submit">
              Sign Up
            </button>
          </div>
          <div className="register__footer">
            <div className="auth">
              <img
                width={30}
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                alt=""
              />
              login by facebook
            </div>
            <div className="auth">
              <img
                width={20}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADdCAMAAACc/C7aAAABX1BMVEX////rRDU0qVRChfXl5eXk5OTm5ub7uwTj4+P19fXx8fH5+fns7Oz29vb8/Pzp6ek1f/W3yvRAg/b///tPkuyJrPXrQDD8uADr6eTqMBsnpkvrOin18+0sp07qNyb8vwDo8PHqNjcbpEUzq0bqMh/w4t4se/UdqFdDgv9Bh+70sKnqKxTvhHnrU0PtSjf1lB5xnfTw+fM8lraLyKagzao7maw3on40qFn+6OH0z83yurPvnprwkojxhHbscWXtemzrwL7y2dPtZ134wrzvYlLuVUTudG30kYPt0M30zpztUh7xeSj43bXuXTD7vz7ziCP87+D3oxf6zHb6x2Pvaiz03L/60Yf4qhP0k27K2e36w1P5yICzy/mZuu/87tTvzo76tkTh6v3E1/SMuXrQtiejsTpprEpLsGrfuB7C3My8tDBlt39/rkWt1r+XsD7b7OMrh9M+kcw5nJuDxJRgt3sPShSiAAAWLElEQVR4nOVd+38bx3G/QHcH3JsiJRAgHrxAIB2ClCqVbPiUREpyJCeK66p1WjlWUrtOEZRl2Jb8/z/dx732bp/3gJl4f9B9FuLczvd2d2Z2d2ZW0zTN0U3dAs/ANAPwsEDVAU/wcMHD1k3DB0/D1G3wcEGVpDHBwwNVDzzN5BUxTfwK8PDjV5imHr2CpEHNGkSzPrNZBVa1nwxIQzcQpa4jSlBFrekRpY4p9YhSN0gaBBJUIcN6+gqffAUCqRvRK/ToFQgks1lMEzfbKc2q5jiO57quBZ7g4YKHlVZt8LDB0yOrGRqbSmMxaWwqjStLU45V8O0N9BEMvQM/Qif62Ab+cJ3owxkG6q+O3sEfzgiYNH5Ko0c0qL8MI/r2MU3cbERDNtuxSBqHpFFk1ZScAvHMw1PAZE8B+ArubM3PPI1oVteYM092thZZlevJdOZFn4dNk/YkmnleMvPketLINJvOVoWepLFqgWLbNvjXAw/bK1RtXLVw1ctU2TRWeRqvSBNXRTRMVnPS1aSIrEhSdhLR2IkkpVi6dpJXxDRi6ZrS5CRypzSrGnsK/I3pyY4RCzP0eUAVfVIDTwFQ9XEVTwEDzyJMk8hQTGNE8jClcUkaG9MYUbNZuVtsVkPVTqbZcqzC74j+HzzhhwOP6GPDlzjgkf1woBp9+5jGSWlsksbFNF5EE2AaC9MoN1uGJmWVr0JidaDHg9IQjg6/QBMNSj0eyFwVQjTLpFFkVRJkJF5KgAQ0WfEiCZIw3tRAUlgNgsD1fd8GT8f3HfCwo6qPqxZ4uviPLFD1wJOk8Zk0sOpF1SB9BZ3GLtJwm1VgVULwGJKCB6kQquCxywgeIxY8hrzgYbCKQP4kVIhIw9KMN0ljgGq8pas1qjHAoJEyBqisZsw6i7S+KFWpP6LQ1PCKSjQCA73YX+IPl1rKpIEu08cGsSJn97Eiqz+JpZYhI8ySlShhvDHlrlFC7jJkqLLcpbKK1JKLVQwoSMW4WMW4kVpysVpyI7XkBlmaIKHBrwjiao4mU3Vzr0hpomYpNPlmlVjF0pU0MAyagZGXy0UDI2fXcFRIvNQS2UJUu6YEq1qW4VTJiZWP0EItgtTMIIQvDkGBmM3AzOlWeeNNiVWNPc9T8aLD1vTE6M/Jhpx4cSmvgKico+OTk9Ozt89fvHr18vnzs9PZ7PyiBzED04tCY8bN5g0IdVYTwcNdvjEETyJEOrlVY0SDxmjobh3P3r56stufjseDwaCLy2AwHk+n/cHjl6evj/ww1JVWjYqsNqdCdPixL2bPPwfoBt2fMQqAO+5PX5yd97Qmd+uI7RHulkqsYQs02U3u2OALw62T54P+mAmPgDqY9t+cHdthoGscY6Asq2hny4M7Wy54eC5RRQYSrtrsKoXG0Y5O30gCzADt7p27miPXjgKrSPCkO6WR1RtvPkvtrkYfDqt8vLs6nL2ZskcoD+h08PYdkr3MvfUSrHKla6mlVqgdv1TsQ6IM+p/PnCZ264hjBKkN63xPxiceoXvypF8eIe7O8eDtUWjye1KFVQ2dAHn4QAgO9LQKHvjUqFDN0jgZGjt0TwcVOjHbnXsXGmzAZjSrxCpfUqpJ17B3Nh3UgBCVbv8l7E2udJVmtT496ZzWBxHDfB6E9S61Kls8J91xnRBhGUxPYevVLZ5iTzNOUbi6V7t4M60bIizjJ+chZ1BKslpahZDr/7PdOsQNrfRfBlZFFWLkerKcY8Rxt9bJSJbB+DW12eqOEUX3AoZjBPx1b7c5iLD098AqH24FlGU1u1unFfRo7KGQ9zYwMo4RR08a7EZcBk/eRbyVZLWaCtG1WWOzMVO6/VklFVLJMcJ0X/abhwhLf68exwi5Xersr87Wm8aHalzGb/IeF/KsyuvJ4lmIc1xqOVWydLtHZVktrSd1MzxpWKrmUU6Pl+4YEc6WixGg3F0r6RgBj2I1dF5r+qCYyZGvmR7favAEWEuObzHN2ZJETopx/K4kq2o+A+lebvgjYLwISrFaGmR41og9zsV4VLI/IseI3BjQUKeb4FfHzI8BE42BHwEjkK1mGVbRcC0leH4EjFtBBY+sEioknC19Pg62gqYdI0gNu2z9iMZqWMlLUtmssy6W3o/dC0fVMYI061QNdN9amrkaYxxvBRKOETwDXXmp9biCvQpP7AZjVAZdyfdAjDX6oGvsz5NsgYV7Jffk4LnV9PNfvZ2dzk5ev57NzvZeDfpT8U400I9Op7BPLsFqdtGstv2hlROsAOCr0+OjMAwdqOjwcboW9t7N9rq7XKBAd4T8uBCZ7Q9NaXfoqATGQb97dm5rNMcI6Kt7NHvBPh8CGE3G/pnKRpaa8lGekN3x7tnFszBguCQhn+awd/KYfkgEdIdZ/VQrvyXJVz7emeKE7E4fn6SziB1NEGoXL/pFqQ1tuSrRBMmiWeWY4FjNCgAQz0ETDI+sTqZZv2OGW3v53gR2jrl8xwi1wToGEJV8645eEDMeYazXMaIwZ4uj41RlsHanMzfrCctwciCDDs8H6ZjtPjkKmDSKR3dkVB4j+g9VlSRr/+VWKBl0mG3WSnbju0+2fDulKQYQ8ljN0SDBI3VGHb6QH6zd6UnI9moN0rCzXNAhaPY1VicAo1nfcbq0XD6X78jx462wtA862suFGJtyjOD5jchLnf5bT5cMIMwFHaJm3V+Nu0+GVp0uLqmzEnx4ZDXj8jOT3gzYnXliB6diO2lVe9vdEtOwWS06K0m6nbnSY7X/OhT4oLOla2SI+VtmvW5ncnoy+OLXP5fE+C68uz7ofDMiWN/8jRTK/oVGuoLGcTwMH/QOEfvTlCsoT2Ql3rXaF+vtzb+TQDl9FyKnXrP4CsLZNtvH7Ga5vsQKNAikyOdZ99fb7fbmv4r78XUo5YPOUCGNumeLvNfN9xBke3Pzt/zO7M/Cu+loLxPJF37ZxmXzH3kox2+15BUuDiBkhEwEZNQFGTIRkDREAKGIVUbIhEzwy1fr7RjlP7Exdt+EdzX4RUaFfEhAtjfXmUMWrIzuahiTRECan2KEMBm6pH8e3NmANPG2tPWeAMnQJYM9p7bQwprCEZOqVvwI+Y2T4J/bZNlcp4EMIiuqoSBRan/JBomyp0CsfIL1dr5s/ku+M6cnwR0P9+VbUe+LIAtDtvsqvMuB29y4dqiWvPxoxShJ82f3onwIvlNLCD6PRuwzYFM6Mq9Lui9SmjSMiRV0yFUhjSRTEIE0v6aDJHTJ7gUN5F1Ki8HPGhL8jgUSmD8/jzvSiV6BaeIEJ6i1u5DgRDibv2RhTIds/8K5Y6lqOqTg0QRyecjsyGTIdt/8tWeMYE7JCCXQJePZXU8fZVnRzlaSgouoOn/kg4S6ZGwzXkFk5PK47RSqGRq7Ko3IMaJg0xVRtv8tVE/ppvd6kGbY68EI2DXwQMIqrcIO6uGqAx5rmGaY0sD/hVW718umgUtjHaUdI4xQ0JGgrH+tmDHCv19z+UjOVmUf9C0JkIbO68limsW1B9srtZanRE9S0izSM1cmB0ICuQPLN75iwszhg9V7tZadoSBhpkBkfSEEuf5FZuZJpT6tHeT2sJpjxO/Fo/Ur6szj6MnaQa58rLbU+kYMEmWnY1k8OM0CuU/eAEidavHEzQqOCUKOUReVLynGG/+YYK12kN9W2q0Ta5D1D8pJh+oH+amsYwQCaYpBvs/RZFKEMXbrage5+lDJMSIvfcVqcv1r5WzM9YN8usbNxqwV9aiVcUr8gxjkV9k8A7pBGG/0nbfaBQ9QlFUcI8S2wPqWcnK++kECRSntGJE3BgwJkO0wO/N0mczKTYAUO0aQe9CZqic2eNoOLeiQW619Tt7bfubxmuU7Rvii1SRUk+xszMuSrgBkBccICZD/rp6crwGQYQXHCDmQTItHX5LFc2/7O7FjhBmQu3kB3gEMTFtiuKL0HF6Uni3ZeAxwNuYgysYcwE1EJ6rWL3hWPgZu2k7crAueCB4CSaTuIvZyZUDGe7nCvHXNqRCwDJFwjIh32PMgaYc9uRIShwF3EyT3rMSW0JN2UDyT4WdWbkBPdrhJoPmOEb6ExTPkZ2NejuAJqyy1ZGzXu6BCnskm56Pt1smsQtjZmO+MMUD3KYh/dSXWk3fBrFvjNoulK9NA18SC5wM9e/ZSDfTVSkst3sFdVL4MqTNvqSrkgcxSixBMxG6d8Cgk3a0jFs0857LaQa4+7fEdI+D+gO+QvncOjMgIwMNzfycG+Qc3ooGvcNArLFBFaZGdKBszUW1gj2ctckck2vHiqsi3TmIH/Y8mXYUwHSOa2a1LnSkIxwgZH3Sxomx/EyreF9LMvmtRPRcdI/R8imMMUuZUq0eCjMSYu8R91+8L0jMGKecYIQHyvfAOn/wxwcqqShGD/I5+TCDtGCEWr+3/UFQhvU8PlYoQ5fawomOEcEX5w2cTT+QYkQtxSQ/N4Sl5r1DNHJqDXz+uCLtymN+oIoMONRjy49puNgIoqqKcxkIT/U+ftTauHN4r0rTI4Fe7+EdcGs8dfisCufp0mKPJNSvMGEFxBM1Mx/Z/ftZqjeaum7Wi8sfpFe66gzRPRcMVahCKY4TCrYXcw7s/t1CZLJSWWmo+6GvCKQmFa7XkfCbbt679X59hkKNLh9eTHZWezAYQImcK8ZTcpmWMIHoSDdokXbHtRFUvSXHMnpT/HWEEXXltEzRWMS1yIUty0k42s7JXyKw8/CRWIWvsdvCcFElXzWGBbCUYQVfatd0Jm5PIPSHE1afFJLY56SrSk5r1gQrxhxQimpVBMw6Ea98LRyuQO834oLf/QmAEAtaWd4xQcgUVyla4fS5yBSWP0/28CwwYyMXxijUHUSZXlON0Tp4B5kXFZBoTsyO2BFaGhdTBapGwSB18yKP8c6tYJs9swSqEFUDIUyE9sU23+rCXCzqkrUL46aPB58lvvv4p341Y9lhS68liMCABUicc7aU68n6PoKGtJyUyK5OxWhnNkRuwdtYxIlqixx4K2So/TZCfecVQ3JH3tkNRs7FjBLnHo5MRJaQ90KJjhANW0jEiETyk/yQlSdTHbSHG1Z0sqxUyRqTxk4mRQxuw85pViL62I8SIDdcqPujx53ETD7u/sDG2WhuXcvuumQBCUu7merL3STwjoQKRyxjBdIyI9qG9WFUWNEduwB44ZfPnUf5oKLGQBKN1TdwO6yyEdN7HS5EfuAix8JE5C6H0sVEIOrQ0TwwRyla7towRsCupmiOPclHXUsvTpLa7tp36bi0M1tcFQzVFKTyfZAcdps0aa08lBit0HZS8tZCTrjg+vtXeT2QgRn2ZnDSbyZGv6ZMBhFpywK3lTqdNVF2TETqgIz8WWCVOmnGzWLoyfQbSgXwoCRJIH9mMEUY0kGnNfhJrSNiRD4bKtxbyQC5ku7I12VcESQkgfCiFEZl0khkjkB8P7nQ0XE2crhinONZgp4MxoM1H0ihvLRfRxGmR43GTZklGwzVtFraDfH9ws7bUfLwHXUBprBaaLXpkMdIwBNfSXdkaHV5XETzhPcljhJX7VFarJOe7lO5KNDFd1lJLpEK+XZE9KtkZMliVdIygaNhnG/IgW5P5tWtyjQF60KF7ffk/v5DEuHJ/yGCV4RjBNetw1TmQH7BgyE5uXE/VrLPsg8nGo7+XRLkzlPTH0IofoWigR31sy8seWDZaV4GpYqCb7qIFR8ujX/5Cytj5ns1q+VsLTQXZg2EeXrk2ZeZRl1qeu5hPYroHYvG6+lQxYwR90Vz4PJbSgMXsHlhyi2broDVJBsro0f8Kh+zKdzxWyZ6U2P5Igy3sW6UBi2BOLhcw0TInSzJgdnE5IcXao/8TDNmVh0Muq0RcCD/CJyey9EC1K2G3TCY3V57tYnfffIoY170+AAgLH+/RL3f4KNd0Lqslllqx8gnkrTsC58ZkfnO1CMEb8aXMwMwBPehcX+3fTigIEU2Lp0uA1JHMrKQLT7UKn8fdV9GWOaCTjfntzf4BLPs3t/MJ+IEOEJdH/8BEufJQOrOSIeEYkd9799SnZRbpaLSBy0jiNUxdsrrjymSM6Mg6RhTksntYBaVaYemSle8aukojEUnhZGkggS6hmT/b93tyrGZuLeSlK6akOLbLCZ+ShaJLVh6uSbJKubWQepxOC96/WirKeU6XrO705FmVc4ygyWVX2fKpUkYjwvxZ3QkaurUw5zeyXJRAl2SWmDDeXoFVBE8qLXIh47G2v1yUqfmz/dFTY9VTubWQDDrUltuXG4eR+QMEqyqrFW73XfKIbWFdApVHycxKpRJPBUuVsdj8ARhL5cgyBSmOs0GHnpkscyHNUvUlHLI73w/LsSp5Sx7FtNe86yVaeC3kLFSSVaWrAAlvA/BJ3duyaxL1Mppcq1zNSLBKT+oomeI4sG4mS8K4MQ/dsqxmBQ8t+IUdUYJpgCG7lCE7ubQp++SyWUHLqpCYJgjjPbYGy2hyZesNJefjbYGlNEBjNtyZG/NrW5Cpl8uqluxd8zIeFwMPs78618125uTGsqR5o7GqusdDTXFs2g125sbhwq2aPbvaBfHxFLDCy2ZgjiYHiAuVVJplHSOoaRhIYbZoYMyOJrfPqDJUkdWSKY5zmZUt+LdXhzXDnMyvYz1eIRsz3TFC7uoGmsPn1WF9FtBoMl/w7BoFVkmQKpdwUF13bdCbtcxNMFAXrsazUBVYRSArpDh2E6MfpzgO3MVtdZgbG5cLO8g1q5dmVenWwrzgoWdWtq/3N6rgHE1aB9dudKhXzx0+9agQMowpQEdxpXCOJqObhR/UfpUGd3uEcx6WSXGcjTWJDD7v6nKk2J+jjcnhzSLTbG33apEbXVZ+o4u3j2fxaTxrsT9nHcxRAI5uD64hmeT2oQKrSPAUUrrJXCBXSHFMSekW2ObiYD6acA6x4DnXZDK/AdPQDaRD1dRY1bSy6xeBV2vsTAFo/OvFwc38EB1HokO76PwO/DA5nF/uXyFl0fhVGmUudSwcPXCS85nweNkJF4urg4P9/f2bfXgSe7VYdLAWYvig83pS7f5JwYGQxHmXSsJMH04SH5pc0PtJdCsozcmhDKsqd8KypKtq6lPpWC120KEiq03oyTt35RTD4ukoWTz5AMKIhpGOOENTx62FMqwK38ndrcvcg+bQoNyNO3zYo0NuFSJQIVUjYetQIdFSq8zV8qJQUGpMM3lroZpI6pRmVRO4pYkUBZ2Gn7afrSj4QYelWS3lGIG9DcRmQjbPgFTQYdoscWuhjMqv3THir06FyPUk1WFNaLpzLkVRvLVQoSdprKq4iSul4KuPRvoVLJqcdOV4GzAzK9OT89VwUVGOhnsWwmVVY0+BWpZad0FPKjlGlLZ4ln95WOHWQhOFOWXTFfs4XbEfZWNG1SAKp/I0GBqV0ED38ogGvaJA40U0UTs4GzPximKzXvQK1F+SNDxWVR0jxHu5+YwRnNg6mgqh7ZNTwwDVLvQr4W2gBrLM1YwVQFJYVTzWoZyvUDIrK12y6ddyySaP1aUInqUttViCR/upqBCRhuU7RnCNAUY2Aa4xwLj2WMoYoDtGLNlEk6ZhJIEu1WxJxwgZA521W1fGQK/gGCG+tfBvY6n1/zWg5hqJ363mAAAAAElFTkSuQmCC"
                alt=""
              />
              login by Google
            </div>
          </div>
        </div>
      </div>
      <div className="register__right">
        <MySlider />
      </div>
    </div>
  );
};

export default Register;
