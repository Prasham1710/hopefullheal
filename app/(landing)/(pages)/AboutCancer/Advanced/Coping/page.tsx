import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Diag = () => {
  return (
    <div className='w-full  h-full' style={{ backgroundImage: "url('/bg6.png')" }}>
        

        <div className="flex">
            <div className="flex flex-col  p-3  shadow w-60 bg-blue-900 ">
                <div className="space-y-3  ">
                    <div className="flex items-center">
                    <h2 className="text-lg font-bold text-blue-100 mt-14 transition-transform transform hover:scale-110 hover:shadow-xl "><Link href=' /components/AboutCancer/Advanced'>Advanced Cancer</Link> </h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Advanced/Choices'>Choices for Care</Link> </span>
                                
                            </li>
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Advanced/Talking'>Talking to Family & Friends</Link></span>
                                
                            </li>
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Advanced/Coping'>Coping with Your Feelings During Advanced Cancer</Link></span>
                                
                            </li>
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Advanced/Future'>Making Future Plans with Advanced Cancer</Link></span>
                            </li>
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Advanced/Purpose'>Finding Purpose and Meaning with Advanced Cancer</Link></span>
                            </li>
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Advanced/Questions'>Questions to Ask Your Doctor about Advanced Cancer</Link></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto p-6 ">
            <Image src={'/coping.png'}  width={500} height={500} alt='cancer' className='rounded-xl  mr-40 transition-transform transform hover:scale-110 w-[800px] h-60 my-6'/>
            <h2 className="text-2xl font-semibold mb-4">Coping with Your Feelings during Advanced Cancer</h2>
            <p>You may experience a wide range of emotions while dealing with advanced cancer. Here are some common feelings you might encounter:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Hope</li>
                <li>Sadness and Depression</li>
                <li>Grief</li>
                <li>Fear and Worry</li>
                <li>Anger</li>
                <li>Guilt and Regret</li>
                <li>Loneliness</li>
                <li>Inner Strength</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Hope</h3>
            <p>You can still feel a sense of hope, despite your cancer. When you're told that remission may not be possible, you can hope for other things. These may include comfort, peace, acceptance, and even joy. Hoping may give you a sense of purpose, helping you feel better.</p>
            <p>To build a sense of hope, consider the following tips:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Plan your days as you’ve always done.</li>
                <li>Set dates and events to look forward to.</li>
                <li>Spend time with the people who matter to you most.</li>
                <li>Don’t stop doing the things you like to do just because you have cancer.</li>
                <li>Find small things in life to enjoy each day.</li>
                <li>Don't limit yourself. Look for reasons to hope while staying aware of what's at hand.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Sadness and Depression</h3>
            <p>With a terminal cancer diagnosis, you may feel sad more frequently than ever before. Feeling sad may cause you to have no energy or not want to eat. Remember that you don't have to be upbeat all the time or pretend to be cheerful in front of others. Do what feels natural to you.</p>
            <p>Depression can happen if sadness or despair seem to take over your life. Some signs of depression include:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Feeling helpless or hopeless, or that life has no meaning.</li>
                <li>Having no interest in family, friends, hobbies, or things you used to enjoy.</li>
                <li>Losing your appetite.</li>
                <li>Feeling short-tempered and grouchy.</li>
                <li>Not being able to get certain thoughts out of your mind.</li>
                <li>Crying for long periods or many times each day.</li>
                <li>Thinking about hurting or killing yourself.</li>
                <li>Feeling “wired,” having racing thoughts or panic attacks.</li>
                <li>Having sleep problems, such as not being able to sleep, having nightmares, or sleeping too much.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Grief</h3>
            <p>You may feel grief about having terminal cancer and the thought that you could be facing impending death. We all cope with loss or the threat of loss in different ways. How one person grieves may be different from another. It can vary depending on how you were raised or what culture you grew up in.</p>
            <p>Some of the symptoms of depression can also apply to grief. But grief can also be expressed through constant feelings of sadness, loneliness, anger, fear, and guilt. It can even affect the way you think. For example, you may:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Get easily confused, can't concentrate, or feel lost.</li>
                <li>Have thoughts that repeat themselves over and over again.</li>
                <li>Feel low in energy or really tired.</li>
                <li>Feel forgetful or have a hard time remembering things.</li>
                <li>Not want to do things or see people.</li>
            </ul>
            <p>These are all very normal reactions to grief. What may help is to do the best you can to pace yourself. Accept that you're going through a lot right now and it's okay to feel what you feel.</p>
            <p>What you grieve for is as varied as how you think and feel. You may grieve for:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>The loss of your body as it used to be.</li>
                <li>The things you used to be able to do.</li>
                <li>Plans you made that may not get fulfilled.</li>
                <li>Leaving your family and friends.</li>
            </ul>
            <p>It's okay to take time for yourself and look inward. It's also good to surround yourself with people who are close to you. Let your loved ones know if you want to talk. Or let them know if you just want to sit quietly with them or would rather be alone. There is no right or wrong way to grieve.</p>
            <p>Often, people who go through major change and loss need extra help. You can talk with a member of your health care team, a member of your faith community, or a mental health professional. You don't have to go through this alone.</p>

            <h3 className="text-xl font-semibold mb-2">Fear and Worry</h3>
            <p>
                <span className="font-semibold">Ben:</span> "I have people around all day but there’s nothing worse than waking up alone and upset at 3:00 in the morning in a quiet, dark room. I have to have someone I can call right then."
            </p>
            <p>
                Having end-stage cancer brings new fears and worries to life. Facing the unknown is very hard. You may be scared and concerned about:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Losing control of your life</li>
                <li>Becoming dependent on other people</li>
                <li>What will happen to your loved ones in the future</li>
                <li>Being in pain or feeling sick</li>
                <li>Financial issues</li>
                <li>Dying</li>
            </ul>
            <p>
                All these fears are normal for many cancer patients. It takes time to come to terms with your illness.
            </p>
            <p>
                Some people say it helps if you:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Know what to expect.</li>
                <li>Learn more about your cancer and care options by asking questions of your health care team.</li>
                <li>Update your affairs. If you have not already done so, make sure your will, advance directives, and other legal paperwork are in order. Then you won’t have to worry about it.</li>
                <li>Try to work through your feelings. If you can, talk with someone you trust. Or ask for help from the hospital social worker or counselor.</li>
            </ul>
            <p>
                If you feel overwhelmed by fear, remember that others have felt this way, too. It's okay to ask for help. Fear can be managed.
            </p>
            <h3 className="text-xl font-semibold mb-2">Anger</h3>
                <p>
                    It's very normal to ask, "Why me?" and be angry at the cancer. You may also feel anger or resentment towards:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Your doctor and other members of your health care team</li>
                    <li>Healthy friends and loved ones</li>
                    <li>If you're religious, you may feel angry with God</li>
                </ul>
                <p>
                    Anger often comes from feelings that are hard to show, such as fear, frustration, and helplessness. Give yourself time to sort through these feelings. It's okay to feel angry and you don't have to pretend that everything is fine. It's not healthy to keep it inside you. But at some point, you don't want to shut people out either. When you’re ready, talk with your family and friends about why you’re angry. Or ask your doctor to refer you to a counselor to work through your feelings.
                </p>
                <h3 className="text-xl font-semibold mb-2">Guilt and Regret</h3>
                <p>
                    It's normal for people with advanced cancer to wonder if they did anything to add to their situation. They may:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Blame themselves for lifestyle choices</li>
                    <li>Feel guilty because treatment didn't work</li>
                    <li>Regret ignoring a symptom and waiting too long to go to the doctor</li>
                    <li>Worry that they didn't follow the doctor's advice in the right way</li>
                </ul>
                <p>
                    It's important to remember that the treatment failed you. You didn't fail the treatment. We can't know why cancer can be controlled in some people and not others. In any case, feeling guilty won't help—it can even stop you from moving forward with life plans or interacting with others.
                </p>
                <p>
                    So, it's important for you to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Try to let go of any mistakes you think you may have made</li>
                    <li>Focus on things worthy of your time and energy</li>
                    <li>Look at what you can control, not what you can't</li>
                    <li>Forgive yourself</li>
                </ul>
                <p>
                    Some patients feel guilty that they’re upsetting the people they love by having terminal cancer. Others worry that they will be a burden on their families. If you feel this way too, take comfort in this: Many family members have said it is an honor and a privilege to care for their loved one. They consider it a time when they can share experiences and become closer to one another. Others say that caring for someone else makes them take life more seriously and causes them to rethink their priorities.
                </p>
                <p>
                    Maybe you feel that you can't talk openly about your feelings with your loved ones. If so, counseling or a support group may be an option for you. Let your health care team know if you would like to talk with someone.
                </p>
                <h3 className="text-xl font-semibold mb-2">Loneliness</h3>
                <p>
                    As your cancer progresses, you may find yourself alone more often, which can lead to feelings of loneliness. This may occur because:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Even if people are around, you may feel that they can't understand what you're going through</li>
                    <li>Some people may distance themselves from you because they have a hard time coping with your cancer</li>
                    <li>Others may think that you prefer to be left alone if you don’t feel well</li>
                </ul>
                <p>
                    Remember that you aren't alone, even on the hardest days. Keep doing the things you've always done, the best you can. If you would like to connect more with people, consider the following:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Let them know that you don't want to be alone and would welcome their visits</li>
                    <li>Ask people to reach out to you through mail, email, or telephone</li>
                    <li>Try joining a support group, where you can talk with others who share your feelings</li>
                </ul>
                <p>
                    If you don't want to reach out to people yourself, ask a friend or family member if they would do it for you.
                </p>
                <h3 className="text-xl font-semibold mb-2">Inner Strength</h3>
                <p>
                    Despite the challenges you face with cancer, you may discover a reservoir of inner strength within yourself. Here are some ways people find and cultivate inner strength:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Some focus on the present instead of dwelling on the past or worrying about the future</li>
                    <li>Others set goals for themselves, making plans for things they enjoy</li>
                    <li>Some draw strength from their relationships with loved ones</li>
                </ul>
                <p>
                    Inner strength manifests differently for each person. Find what resonates with you and draw upon it during difficult times.
                </p>
        </div>
   </div>
   
</div>
  )
}

export default Diag