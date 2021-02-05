import React, { Component } from 'react'
import ReadMore from "./ReadMore";
import IconContainer from './IconContainer'
import BlogCover from "./media/BlogCover.jpg"
import "./styles/BlogPage.css"
import { Container } from 'react-bootstrap';
export class BlogPage extends Component {
    render() {
        return (
            <div className="blogContainer">
                <div className="CoverHeading">
                    <img className="blogCover" src={BlogCover} alt="Blog Cover Img" />
                    <div className="heading">How we started the organization Programming Pathshala.</div>
                </div>

                <Container className="blogContent">

                    <IconContainer />

                    <div className="text">
                        This article is by Sunita Mohanty, who is a Product Lead as a part of Facebook's New Product Experimentation. She has built products for startups, nonprofits and global public companies, most recently leading product teams at Oculus, Facebook Core Growth and as Director of Product at Lumosity. She is also a startup advisor, angel investor, and member of First Round’s Angel Track community.

                        In my role leading product teams as a part of Facebook's New Product Experimentation, we’re focused on that hazy “0 to 1” stage of building, where ideas are unproven and products are in their most nascent stages. My job is to distill the complicated unknowns of a big, disruptive vision into clear, actionable steps for my teams and increase our chances of finding product-market fit at every step. This focus on taking big swings while still pursuing concrete steps toward building valuable products is the direct result of my previous experiences — I’ve felt the pain that comes from building products that fail to tackle a clear problem firsthand.

                        Right after grad school at Stanford, I found myself in the middle of my first startup: a failing K-12 analytics company. We were on a mission to improve a broken education system with the promise of interesting technology. But we were stuck in circles of decision-making and couldn’t successfully execute or build traction. Looking back, it’s easy to diagnose that we had a hard time focusing on which problem to solve first because we didn’t understand the actual problems of our audience well enough — we only assumed we did.

                        Now in my work as an angel investor and advisor, I see teams run into this very same brick wall. As I help them prioritize early product and go-to-market efforts, I often find myself dishing out the same advice: Do the work to make sure you are building a product that people will actually find valuable. That requires an incredibly deep understanding of the user, their hopes, and their motivations, instead of taking the easier path of operating off of untested assumptions.

                        Many entrepreneurs may do this intuitively — but many others fail to cultivate a deep level of empathy for their users, which ultimately can lead to building the wrong product for any specific market. If you don't put in the work upfront, you risk charting the wrong course towards product-market fit, which you may not discover until you’re facing struggling retention numbers or battling high user churn.

                        There’s a range of philosophies out there on how to avoid this trap and better approach early stage customer development, but in both my advisory roles and in my day job, I've come to rely on one framework: JTBD (jobs-to-be-done).

                        I first read Clayton Christensen’s approach to JTBD while in grad school at Stanford, but it didn’t really sink in. After stumbling upon it again years later at Facebook, I’ve since found enormous value in employing a version of this framework as we built Oculus social features, Facebook Preventive Health, and more recently, Tuned.

                        Sunita Mohanty, a Product Lead in Facebook's New Product Experimentation group
                        JTBD is by no means a new way of thinking. But it can be confusing to get started with, since it’s heavy on the corporate strategy jargon and has been reinvented many times over. A quick Google search reveals a bevy of confusing terms, from the debate over jobs-as-progress and jobs-as-activities, or the competing visualizations of maps and hierarchies. I’ve also found that JTBD has a bit of a consulting-esque vibe and seems less vision-driven, which can be off-putting to many product-driven founders.

                        If you’re looking for a deep-dive into the jobs-to-be-done theory and how others apply it, I recommend reading through this primer from The Christensen Institute, this article from Harvard Business Review, Alan Klement’s overview of two different interpretations and Intercom’s guide. But if you’re looking for something a bit more lightweight and accessible for startup product teams, read on for my simplified approach to JTBD.

                        In this article, I’ll detail the version of this framework that’s used by product leaders at Instagram and Facebook, and applied in my capacity as an angel investor and advisor to early-stage teams. I’ll walk you through my template, examples from other companies for inspiration, and advice for the entire process from early concepting to launching and refining. In addition to outlining the case for using a framework instead of relying only on your gut, I’ll share tactics and templates for pulling together a clear set of product development principles that can inform your value props, PRDs and go-to-market tactics in order to execute with precision.

                        WHY YOU CAN’T JUST WING IT: THE CASE FOR USING A FRAMEWORK TO UNDERSTAND YOUR CUSTOMERS
                        Do you find your team is unable to align on what matters most about your product as you’re starting out? Or that you’ve worked hard to bring something to market that you were all excited by, but you’re not getting traction with users? Founders, early-stage teams, and even later-stage product orgs run into these problems time and time again. The bottom line is that you can very easily build something, but to increase your chance of creating something that is solving a real problem you need to be more rigorous in your approach.

                        Anyone can build products. Not everyone can build products that solve a real problem and land product-market fit.
                        More specifically, here are three common problems I see both early- and late-stage product teams running into that indicate a framework might be useful:

                        1. You’re relying too heavily on your own vision. You’re not really listening to your users and you’re building something you think people want. This is confirmation bias at play — the human tendency to cherry-pick information that aligns with our pre-existing beliefs while ignoring information that doesn’t. If you haven’t gotten out and deeply understood who you are building for and what problems they experience, you are more likely to run into this problem. Another variation happens when translating research-based practices into consumer experiences (common in health and education products) — just because something is proven to be healthy or lead to good outcomes doesn’t ensure people will be motivated to try it out.

                        2. You’re more focused on the excitement of the technical challenge than your users. Often, eng and design teams may get excited about a specific project because it’s a new challenge to create. But just because it’s new and fun to build doesn’t mean people will actually use it. This tends to be one of the more common pitfalls of hardware teams, which have an especially high cost to getting their products wrong.

                        3. You can’t crisply articulate your value prop, and everyone on the team looks at it a different way. We’ve all been there — product sees the value as X, marketing sees the value as Y, eng sees the value as Z. This happens when you don’t have a shared sense of empathy around the problems users face. It makes it tough to drive alignment and focus on what features matter the most or how to align product features with go-to-market needs.

                        Intuition and conviction are extremely important in building early-stage products, but pairing it with listening to users can increase your chances of being right.
                        ENTER THE JOBS TO BE DONE FRAMEWORK: WHAT IT IS AND HOW IT TAPS INTO WHAT CUSTOMERS WANT
                        Whether you’re a product manager innovating within a larger company, or building a brand new early-stage product at a startup, the JTBD framework works to create better, non-obvious insights about your audience. Ultimately, the core value of this framework is that it provides an approach to gathering an understanding of who your user is, and what their motivations and hopes are. You as the founder or product leader are left to determine how to translate this into what matters most for your product — combining great intuition with great information gathering to make better bets on where to invest resources.
                    </div>
                </Container>
                <br />
                <br />
                <ReadMore />

            </div>
        )
    }
}

export default BlogPage
